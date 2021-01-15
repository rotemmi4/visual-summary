from model.concrete import TextConcrete


def insert_text(name, content):
    return TextConcrete.insert_text(name, content)

def update_text(id, name, content):
    return TextConcrete.update_text(id, name, content)

def delete_text(id):
    return TextConcrete.delete_text(id)

def get_text_by_id(id):
    return TextConcrete.get_text_by_id(id)

def get_texts():
    return TextConcrete.get_texts()
