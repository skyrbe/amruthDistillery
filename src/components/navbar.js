import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

class NavigationBar extends Component {
  constructor(props)
  {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout(e) {
    e.preventDefault();
    let user_id = {
      id:this.props.auth.user.user_id
    }
    this.props.logout(user_id).then(
      () => {
        this.context.router.push('/');
      },
      ({ data }) => this.setState({ errors : data, isLoading : false })
    );
  }
  render() {


    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand" href="#">WebSiteName</Link>
          </div>
          <ul className="nav navbar-nav">
            <li className="active"><Link to="/" className="navbar-brand" href="#">Dashboard</Link></li>
            <li><Link to="/posts">Posts</Link></li>
            <li><a href="#">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default NavigationBar;
