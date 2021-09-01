from flask import Flask , request,jsonify, json,current_app
from datetime import datetime
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI']="mysql://earlyfont:earlyfont@localhost:3306/earlyfont"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] =False

db=SQLAlchemy(app)

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

    
@app.route('/estimate',methods=['GET'])
def estimate():
     file_name = '{}.docx'.format()
     
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
    


if __name__ =='__main__':
    app.run(debug=True,port=8080)