import shutil
import os
from docx import Document
from docx2pdf import convert
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.enum.style import WD_STYLE_TYPE
from docx.oxml.ns import qn,nsdecls
from flask import Flask , request,jsonify, json,current_app
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import schedule
from flask_apscheduler import APScheduler
import time
import pythoncom


app = Flask(__name__)
app.app_context()

app.config['SQLALCHEMY_DATABASE_URI']="mysql://earlyfont:earlyfont@localhost:3306/earlyfont"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =False

db=SQLAlchemy(app)
scheduler = APScheduler()

class Uploads(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    date = db.Column(db.DateTime, nullable=True, default=datetime.now)
    title = db.Column(db.String(100), nullable=False)
    description = db.Column(db.Text, nullable=False)
    thumnail = db.Column(db.String(100), nullable=False)
    detail_image = db.Column(db.String(100), nullable=False)
    font_file = db.Column(db.String(100), nullable=True, default='')
    
    def serializer(replypost_list):
        return {
            'id': replypost_list.id,
            'date': replypost_list.date.strftime("%Y/%m/%d %H:%M"),
            'description' : replypost_list.description,
            'title': replypost_list.title,
            'thumnail' : replypost_list.thumnail,
            'detail_image': replypost_list.detail_image,
        }
        
    def __repr__(self):
        return f"Uploads(title : {self.title},date : {self.date}, description: {self.description})"


def save_file(file,file_name):
    path = os.path.join(
        current_app.root_path,'../build/FontImages',file_name)
    path2 = os.path.join(
        current_app.root_path,'../public/FontImages',file_name)
    file.save(path)
    file.save(path2)
    
    
@app.route('/upload',methods=['GET','POST'])
def upload():
    
    title = request.form.get('title')
    description = request.form.get('description')
    thumnail = f"/FontImages/{title}1.png"
    detail_image = f"/FontImages/{title}2.png"
    save_file(request.files.get(f"file1"),f"{title}1.png")
    save_file(request.files.get(f"file2"),f"{title}2.png")
    new_font= Uploads(title=title,description=description,thumnail=thumnail,detail_image=detail_image)
    db.session.add(new_font)
    db.session.commit()

    return jsonify({'success':'등록되었습니다!'})

@app.route('/fontList',methods=['GET','POST'])
def fontList():
    lists = Uploads.query.order_by(Uploads.id.desc()).all()
    return jsonify({'uploaded_list':[*map(Uploads.serializer,lists)]})

@app.route('/delete',methods=['GET','POST'])
def delete():
    lists = Uploads.query.order_by(Uploads.id.desc()).all()

    request_data = json.loads(request.data)
    selected_font = Uploads.query.filter_by(id=request_data['id']).first()
    db.session.delete(selected_font)
    db.session.commit()
    
    return jsonify({'success':'삭제하였습니다.'})
    
@app.route('/loadFontData',methods=['GET','POST'])
def loadFontData():
    request_data = json.loads(request.data)
    font = Uploads.query.filter_by(id=int(request_data['id'])).first()
    return jsonify({'font': Uploads.serializer(font)})


def refresh_estimate():
    pythoncom.CoInitialize()
    file_names = ['estimate_basic.docx','estimate_basicPlus.docx','estimate_premium.docx','estimate_premiumPlus.docx']
    for idx,name in enumerate(file_names):
        path = os.path.join(current_app.root_path,'../build/Estimates')
        shutil.copy(
        name,  os.path.join(path, name))
        document = Document("{}/{}".format(path, name))
        paragraph = document.add_paragraph()
        run = paragraph.add_run(f"견적일 {datetime.today().strftime('%Y.%m.%d')} / 견적일로부터 15일간 유효합니다.")
        run.font.name = "에스코어 드림 5 Medium"
        r = run._element
        r.rPr.rFonts.set(qn('w:eastAsia'), '에스코어 드림 5 Medium')
        paragraph.alignment = WD_ALIGN_PARAGRAPH.CENTER
        document.save(os.path.join(path,name))
        convert(os.path.join(path,name),path)

def daily_refresh():
    with app.app_context():
        refresh_estimate()






    
if __name__ =='__main__':
    scheduler.add_job(id='daily update estimates',func=daily_refresh,trigger='cron',hour=0)
    scheduler.start()
    app.run(debug=True,port=8080)
    # while True:
    #     schedule.run_pending()
    #     time.sleep(1)
    

    