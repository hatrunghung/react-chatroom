import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import '../App.css';

class ChatRoom extends Component {
    constructor(props){
        super(props);

        this.state = {
            chats: [{
                username: "hungtro96",
                content: <p>Đây là cái chatroom!</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19601349_1913266328937534_7032558742918211986_n.jpg?oh=78773aeba65cdc01809b2a01ceba71ee&oe=5A5A39DF"    
            },
            {
                username: "duc.do218",
                content: <p>Cái này hay vãi lồn nhờ</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12963612_2009206129304923_1081891881697251999_n.jpg?oh=51e3c393e4da038483c916f4db11dff8&oe=5A5966EA"
            },
            {
                username: "minhtvn",
                content: <p>Địt mẹ lào Thanh Hóa ngon vãi lồn:]]</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/15203195_988166257961661_7175113492039934899_n.jpg?oh=859d6cb494f2dc9c5057515c9ee3feb2&oe=5A4D2374"
            },
            {
                username: "hungtro96",
                content: <p>Địt mẹ thằng rẻ rách bỏ anh em</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19601349_1913266328937534_7032558742918211986_n.jpg?oh=78773aeba65cdc01809b2a01ceba71ee&oe=5A5A39DF"
            },
            {
                username: "duc.do218",
                content: <p>Địt mẹ chán vãi buồi, lap như cái đầu lồn</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/12963612_2009206129304923_1081891881697251999_n.jpg?oh=51e3c393e4da038483c916f4db11dff8&oe=5A5966EA"
            },
            {
                username: "hungtro96",
                content: <p>Trả bố mày lap, bố leo rank :)</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19601349_1913266328937534_7032558742918211986_n.jpg?oh=78773aeba65cdc01809b2a01ceba71ee&oe=5A5A39DF"
            },
            {
                username: "minhtvn",
                content: <p>Há há há hờ hờ hờ:]]</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/15203195_988166257961661_7175113492039934899_n.jpg?oh=859d6cb494f2dc9c5057515c9ee3feb2&oe=5A4D2374"
            }]
        };

        this.submitMessage = this.submitMessage.bind(this);
    }

    componentDidMount() {
        this.scrollToBot();
    }

    componentDidUpdate() {
        this.scrollToBot();
    }

    scrollToBot() {
        ReactDOM.findDOMNode(this.refs.chats).scrollTop = ReactDOM.findDOMNode(this.refs.chats).scrollHeight;
    }

    submitMessage(e) {
        e.preventDefault();

        this.setState({
            chats: this.state.chats.concat([{
                username: "hungtro96",
                content: <p>{ReactDOM.findDOMNode(this.refs.msg).value}</p>,
                img: "https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/19601349_1913266328937534_7032558742918211986_n.jpg?oh=78773aeba65cdc01809b2a01ceba71ee&oe=5A5A39DF"
            }])
        }, () => {
            ReactDOM.findDOMNode(this.refs.msg).value = " ";
        });
    }

    render() {
        const username = "hungtro96";
        const { chats } = this.state;
        return (
            <div className="chat-room">
                <h3>NghiNgutRoom</h3>
                <ul className="chats" ref="chats">
                {
                    chats.map((chat) => 
                        <Message chat={chat} user={username} />
                    )
                }
                </ul>
                <form className="input" onSubmit={(e) => this.submitMessage(e)}>
                    <input type="text" ref="msg" />
                    <input type="submit" value="submit" />
                </form>  
            </div>
        );
    }
}

export default ChatRoom;