/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';




export default class App extends Component {
  constructor()
  {
super()

this.state={
number:'',
output:'',

}

  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <View style={{ justifyContent: 'center',alignItems:'center', height: '15%', width: '100%', backgroundColor: '#e8e8e8' }}><Text style={{fontSize:30,justifyContent:'center',alignItems:'center',color:'blue'}}>{this.state.output}</Text></View>
        <View style={{ height: '30%', width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor:'#e8e8e8',  borderColor: 'white' }} ><Text style={{fontSize:30,color:'black'}}>{this.state.number}</Text></View>
        

        <View style={styles.container}>
          <TouchableOpacity style={styles.size}  onPress={()=> {
                  this.setState({
                      number:'',
                      output:'',
                  })
                }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>AC</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size}
          onPress={()=> {
            const a=this.state.number.slice(0,-1)
            this.setState({
                number:a,
            })
          }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>Del</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'%'
                  })
                }}>
              <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'/'
                  })
                }}>
          <Text style={{ fontSize: 35, alignContent: 'center',fontWeight: 'bold' }}>/</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity  style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'9'
                  })
                }}>
  <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>9</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'7'
                  })
                }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}
                
            >7</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'8'
                  })
                }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>8</Text>
          </TouchableOpacity>
    
          <TouchableOpacity style={styles.size}   onPress={()=> {
                  this.setState({
                      number:this.state.number+'*'
                  })
                }}>
            <Text style={{ fontSize: 25, alignContent: 'center',fontWeight: 'bold' }}>*</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity  style={styles.size}  onPress={()=> {
                  this.setState({
                      number:this.state.number+'4'
                  })
                }}>
  <Text style={{ fontSize: 20, alignContent: 'center' ,fontWeight: 'bold'}}>4</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'5'
                  })
                }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>5</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} 
          onPress={()=> {
            this.setState({
                number:this.state.number+'6'
            })
          }}>

            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size}  onPress={()=> {
                  this.setState({
                      number:this.state.number+'-'
                  })
                }}>
          <Text style={{ fontSize: 35, alignContent: 'center',fontWeight: 'bold' }}>-</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity  style={styles.size}  onPress={()=> {
                  this.setState({
                      number:this.state.number+'1'
                  })
                }}>
  <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>1</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size}  onPress={()=> {
                  this.setState({
                      number:this.state.number+'2'
                  })
                }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>2</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size}
          onPress={()=> {
            this.setState({
                number:this.state.number+'3'
            })
          }}>

            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'+'
                  })
                }}>
          <Text style={{ fontSize: 35, alignContent: 'center',fontWeight: 'bold' }}>+</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
        <TouchableOpacity  style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number+'0'
                  })
                }}>
  <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>0</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size}
          onPress={()=> {
            this.setState({
                number:this.state.number+'.'
            })
          }}>
            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}>.</Text></TouchableOpacity>
          <TouchableOpacity style={styles.size} onPress={()=> {
                  this.setState({
                      number:this.state.number
                  })
                }}>

            <Text style={{ fontSize: 20, alignContent: 'center',fontWeight: 'bold' }}></Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,
     alignItems:'center',
     backgroundColor:'orange',
    
      justifyContent:'center',
     borderColor:'gray',
      borderWidth:1,
    }}
    onPress={()=> {
      const b=eval(this.state.number)
      this.setState({
        output:b,
      })
    }}>
          <Text style={{ fontSize: 35, alignContent: 'center',fontWeight: 'bold' }}>=</Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create(

  {
    container:
    {
      flex: 1,

  
      backgroundColor: 'white',

      flexDirection: 'row',



    },
    size:
    {
      flex:1,
     alignItems:'center',
     
    
      justifyContent:'center',
     borderColor:'gray',
      borderWidth:1,
    
    



    }





  }
)