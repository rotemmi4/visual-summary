from pydantic import BaseModel


class Text(BaseModel):
    id: int
    name: str
    content: str