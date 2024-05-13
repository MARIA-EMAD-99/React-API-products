import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changelanguage } from './../store/action';

class Homeclass extends Component {
    togglelanguage=()=>{
       this.props.changelang(this.props.language =='en'? 'ar': 'en')
    }

    render() { 
        return (
            <div>
                {this.props.language}
                <button className='btn btn-success' onClick={()=>this.togglelanguage()}>toggle language</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.language.lang,
        isLoading: state.isLoading
    }
}
const mapdispatchtoprops=(dispatsh)=>{
    return{
changelang:(lang) =>dispatsh(changelanguage(lang))
    }
}
 
export default connect(mapStateToProps,mapdispatchtoprops)(Homeclass);
