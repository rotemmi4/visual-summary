import uvicorn as uvicorn
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from repositories import TextRepository, VisualizationPropertiesRepository
from pydantic import BaseModel
import jwt
from algorithems import RandomAlgorithem
import json



admin_user = 'admin'
admin_password = 'admin'
secret = 'Mr.Awesome'

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextCreate(BaseModel):
    name: str
    content: str

class TextVisu(BaseModel):
    testName: str
    textID: int
    visualizationType: str
    propName: str
    propVal: str
    propType: str

class UserLogin(BaseModel):
    username: str
    password: str

@app.get("/")
def read_root():
    pass


@app.get("/texts")
def get_texts():
    return TextRepository.get_texts()



@app.get("/texts/{id}")
def get_text_by_id():
    pass

@app.post("/saveVisu")
def save(visu: TextVisu):
    VisualizationPropertiesRepository.visualization_properties(visu)



@app.get("/texts/{id}/weights")
def get_text_weights(id: int):
    text = TextRepository.get_text_by_id(id)
    response= {}
    if (text):
        response = RandomAlgorithem.getWeights(text[0],'random')
#         response = AlgorithemFactory.get('random').getWeight(text[0])
    arrResponse =[]
    if(response):
        arrResponse.append(response)
    return arrResponse


@app.post("/auth/login")
def login(user_data: UserLogin):
    if (user_data.username == admin_user and user_data.password == admin_password):
        payload = {'username': user_data.username, 'admin': True};
        encoded_jwt = jwt.encode(payload, secret, algorithm="HS256")
        return encoded_jwt
    pass

@app.get("/private/user/get")
def getLoginUser():
    #token  = request header x-auth-token
    #decoded_data = jwt.decode(token, secret)
    #return decoded_data['username']
    return {"username": "admin"}
    pass

uvicorn.run(app, host="localhost", port=5000)
# @app.delete("/texts/{id}")
# def delete_text():
#     pass

# @app.put("/texts/{id}")
# def update_text():
#     pass

uvicorn.run(app, host="localhost", port=3000)