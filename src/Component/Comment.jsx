/* eslint-disable */
// 语法验证忽略当前文件，这文件故意留了两个语法错误，开发中请删除这三行
// 语法验证报错，会导致打包失败和热更新失败，所以我打包时先注释掉
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const data222 = [
  { author: 'Pete Hunt', text: 'This is one comment' },
  { author: 'Jordan Walke', text: 'This is *another* comment' },
];


function Comment(props) {
  return (
    <div className="comment">
      <h2>{props.author}</h2>
      <p>{props.text}</p>
    </div>
  );
}
Comment.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};


function CommentList(props) {//【comment】
  const commentNodes = props.data.map((comment, index) => (
    <Comment key={index} author={comment.author} text={comment.text} />
      ));
  return (
    <div className="commentList">
      {commentNodes}
    </div>
  );
}
CommentList.propTypes = {
  data: PropTypes.array.isRequired,
};

class CommentFrom extends Component {
  handleSubmit =(e) => {//【submit】
    e.preventDefault();
    const author = this.author.value;
    const text = this.text.value;
    if (!text || !author) {
      return;
    }
    // TODO: send request to the server
    this.props.onCommentSubmit({ author, text });
    this.author.value = '';
    this.text.value = '';
  }
  render() {
    return (
      <div className="commentForm">
        <form className="commentForm" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Your name" ref={c => (this.author = c)} />
          <input type="text" placeholder="Say something..." ref={c => (this.text = c)} />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
}

CommentFrom.propTypes = {
  onCommentSubmit: PropTypes.func.isRequired,
};


class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }
  componentDidMount() {//【setstate】
    
    setTimeout(() => {
      this.setState({ data: data222 });
    }, 3000);
  }
  handleCommentSubmit(comment) {//【commentsubmit】
    setTimeout(() => {
      data222.push(comment);
      this.setState({ data: data222 });
    }, 1000);
  }
  refCb(instance){
    var canvas = instance;
    var engine = new BABYLON.Engine(canvas, true);
    var createScene = function() {  
        // 创建一个基本的Scene对象，用来容纳所有其他对象  
        var scene = new BABYLON.Scene(engine);  
      
        // 创建一个相机，设置其位置为(x:0, y:5, z:-10)  
        var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5,-10), scene);  
      
        // 相机聚焦在场景原点位置  
        camera.setTarget(BABYLON.Vector3.Zero());  
      
        // 使得我们可以控制相机拍摄角度，和three.js中的OrbitsControl效果类似，但简单得多  
        camera.attachControl(canvas, false);  
      
        // 创建一个半球形光源,朝向为天空  
        var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0,1,0), scene);  
      
        // 创建一个内置的“球”体；其构造函数的参数：名称、宽度、深度、精度，场景，其中精度表示表面细分数。  
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 2, scene);  
      
        // 设置球体位置，使其位于平面之上  
        sphere.position.y = 1;  
      
        // 创建一个内置的“地面”形状；其构造函数的5个参数和球体一样  
        var ground = BABYLON.Mesh.CreateGround('ground1', 6, 6, 2, scene);  
      
        return scene;  
    }  
    var scene = createScene();  
    engine.runRenderLoop(function() {  
        scene.render();  
    });
  }
  render() {
    return (
      <div className="commentBox">
        <h1> Comment </h1>
        <CommentList data={this.state.data} />
        <CommentFrom onCommentSubmit={this.handleCommentSubmit} />
        <canvas ref={this.refCb}></canvas>
      </div>
    );
  }
}

export default CommentBox;
