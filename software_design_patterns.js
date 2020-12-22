//patron Factory

class User { 
  constructor(name, mail, password){
    this.name = name,
    this.mail = mail,
    this.password = password
  }
}

class NormalUser extends User {
  constructor(phoneNumber){
    super(name, mail, password)
    this.phoneNumber = phoneNumber
  }
  logIn(mail, password) {
    if(this.mail === mail && this.password === password) return "user logged"
  }
}

class AdminUser extends User {
  constructor(type) {
    super(name, mail, password)
    this.type = type
  }
  changeWebPageConfig(config = {}) {
    for (configElement in config){
      console.log("done config")
    }
  }
}


function userFactory (name, mail, phoneNumber) {
  return {
    name,
    mail,
    phoneNumber,
    create = () => {
      return {
        name,
        mail,
        phoneNumber,
        login() {
          return "user Loged"
        }
      }
    }
  }
}


const anotherUser = userFactory("alex", "test@test.com", 124134123)

const alex1 = anotherUser.create()
const alex2 = anotherUser.create()
const alex3 = anotherUser.create()

alex1.login()

//patron adapter 
const userInfo = (function frontendModule(){
  return {
    id = "13451435",
    name = "fadfa",
    mail = "text@test.com"
  }
})()

const userInfo2 = (function frontendModule(){
  return {
    IN = "13451435",
    n = "fadfa",
    m = "text@test.com"
  }
})()

const adapter = (data, type) => {
  if(type === "initialFrontendModule") {
    const {id, name, mail} = data
    return {
      identfier = id,
      nombre = name,
      correo = mail
    }
  }
  if(type === "secondFrontendModule") {
    const {IN, n, m} = data
    return {
      identfier = IN,
      nombre = n,
      correo = m
    }
  }
}

const frontendType = req.body.type 

//{identifier, nombre, correo}
processBackend(adapter(userInfo, frontendType))