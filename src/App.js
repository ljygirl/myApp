import React,{Component} from "react"
import Contact from "./Contact"
import AddContact from "./AddContact"
import Todes from "./todos"

class App extends Component  {
  state = { 
    contactForm:[
      {name:"aa",age:1,sex:"baby",id:1},
      {name:"bb",age:2,sex:"gril",id:2},
      {name:"cc",age:3,sex:"boy",id:3}
    ],
    todos:[
      {id:10,content:"买菜"},
      {id:11,content:"打扫卫生"},
      {id:12,content:"读书"}
    ]
  }
  addContact=(contact)=>{
    console.log(contact)
    contact.id=Math.random()
    let contactForm=[...this.state.contactForm,contact]
    this.setState({
      contactForm:contactForm
    })
  }
  deleteContact=(id)=>{
    console.log(id,'id')
    let contactForm=this.state.contactForm.filter(contact=>{
      return contact.id!==id
    })

    this.setState({
      contactForm:contactForm
    })
  }
  componentDidMount(){
    console.log('挂载完成！')
  }
  componentDidUpdate(prevProps,prevState){
    console.log("更新完成",prevProps,prevState)
  }
  deleteTodo=(id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id!==id
    })
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>这是我的第一个react项目demo !</h1>
        </header>
        <Contact name="Lucky" age="18" sex="male" contactForm={this.state.contactForm} deleteContact={this.deleteContact}/>
        {/* <Contact name="Summer" age="20" sex="girl"/> */}
        <AddContact addContact={this.addContact}/>
        <div className="todo-app container">
          <h1 className="center blue-text">任务列表</h1>
          <Todes todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        </div>
      </div>
    );
  }
  
}

export default App;
