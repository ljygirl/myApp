import  React ,{Component} from "react";
import "./Contact.css"

class Contact extends Component {
    // this.props.deleteContact
    render(){
        const {name,age,sex,contactForm,deleteContact}=this.props
        return(
            <div className="ContactFrom">
                <div>Name:{name}</div>
                <div>Age:{age}</div>
                <div>Sex:{sex}</div>
                <p>列表：</p>
                {contactForm.map((item,index)=>{
                    if(item.age>=2){
                       return(
                        <div key={item.id}>
                            <span>姓名-{item.name}</span>
                            <span>年龄-{item.age}</span>
                            <span>性别-{item.sex}</span>
                            <button onClick={()=>deleteContact(item.id)}>删除数据</button>
                        </div>
                        ) 
                    }else{
                        return null
                    }
                    
                }
                )}
            </div>
        )
    }
}

// const Contact=(props)=>{
//     const {contactForm} = props;
//     const fromList=contactForm.map(contact=>{
//         return(
//             <div key={contact.id}>
//                 <div>{contact.name}</div>
//                 <div>{contact.age}</div>
//                 <div>{contact.sex}</div>
//             </div>
//         )
//     })
//     return(
//         <div>
//             {fromList}
//         </div>
//     )
//   }
export default Contact