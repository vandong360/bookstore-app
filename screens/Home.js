import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image,} from 'react-native';
import images from '../constants/images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import newAPI from '../apis/API';


const Home = ({route,navigation}) => {
  // Data
  const [trending, setTrending] = useState([]);
  const [bestseller, setBestseller] = useState([
    {
      id: 0,
      name: "Of Literature and Lattes",
      img: images.bestseller1,
      author:"Katherine Reay",
      type: "Văn Học",
      price: "350.000 đ"
    },
    {
      id: 1,
      name: "Because of Winn-Dixie: An Instructional Guide for Literature",
      img: images.bestseller2,
      author:"Tracy Pearce",
      type: "Văn Học",
      price: "300.000 đ"
    },
    {
      id: 3,
      name: "The Dine Reader: An Anthology of Navajo Literature",
      author: "Esther G.Belin " ,
      img: images.bestseller3,
      type: "Văn Học",
      price: "350.000 đ"
    },
  ]);

  

  useEffect(() => {
      getTrendingFromAPI()
  }, [])


  function getTrendingFromAPI() {
      newAPI.get('dashboard/product/trending')
          .then(async function (response) {
              setTrending(response.data);
          })
          .catch(function (error) {
              console.log(error)
          })
  }

  if (!trending) {
      return null
  }
// function renderTrending(){
//   const renderProducts = ({item,index}) => {

//     return (
//         <View style={styles.cardView}>
//             <TouchableOpacity onPress={()=>navigation.navigate('Details',{book: item})} >
//             <Text style={styles.title}> {item.name}</Text>
//             <Text style={styles.author}>{item.author} </Text>
            
//             {/* <Image style={styles.image} source = {{uri: item.urlToImage}}/> */}
//             <Image style={styles.image} source={item.image ? {uri: item.image } : null}/>
//             <View style={styles.discount}>
//                 <Text style={{
//                     color:'white', 
//                     fontWeight: 'bold', 
//                     marginVertical:13,
//                     textAlign: 'center',
//                     fontSize:14
//                     }}>{item.discount}%</Text>
//             </View>
//             <Text style={styles.price}>{item.price} đ</Text>
//             <Text style={styles.oldPrice}>{item.oldPrice} đ</Text>
//             </TouchableOpacity>
//         </View>
//     )

//   } 

//   return(
//     <FlatList data={trending.products}
//                 numColumns={2}
//                 keyExtractor={(item, index) => 'key' + index}
//                 renderItem={({item,index}) => renderProducts(item,index)}
//             />
//   )
// } 

  // render

  // function renderTrendingShoes(trending){
    
   
  //   const renderItem = ({item,index}) => {
  //     return(
  //       <TouchableOpacity style={{height:340, width:180, justifyContent: 'center', marginHorizontal:8, marginLeft:13}}
  //     onPress={()=> navigation.navigate('Product')} >

  //       <Text style={{color:'gray', fontWeight: 'bold', fontSize: 12, lineHeight: 22}}>{item.category}</Text>
   
  //       <View style={{
  //         flex: 1,
  //         justifyContent: 'flex-end',
  //         marginTop: 8,
  //         borderRadius: 10,
  //         marginRight: 24,
  //         // paddingLeft: 10,
  //         paddingRight: 24,
  //         paddingBottom: 12,
          
  //       }}>
  //          <View style={{ height: '25%', paddingLeft:10, paddingTop:14 }}>
  //                       <Text style={{ color: 'gray', fontSize: 16, lineHeight: 22, fontWeight: 'bold' }}>{item.name}</Text>
  //                       <Text style={{ color: 'gray', fontSize: 16, lineHeight: 22, fontWeight: 'bold' }}>{item.price}</Text>
  //             </View>
  //       </View>

  //       <Image 
  //       source={item.image ? {uri: item.image } : null}
  //           resizeMode="cover"
  //           style={{
  //             position: 'absolute',
  //             top: 30,
  //             right: 0,
  //             width: "100%",
  //             height: 240,
  //             borderRadius:10
              
  //           }}
  //       >
  //       </Image>
  //     </TouchableOpacity>  
  //     )
  //   }

  //   return (
  //     <View>
  //     <Text style={{marginTop:20, marginHorizontal: 10, fontWeight: 'bold', fontSize: 16, color:'#ebb859' }}>MỚI</Text>
  //     <View style={{height:350, marginTop: 12}}>
  //       <FlatList horizontal
  //                   showsHorizontalScrollIndicator={false}
  //                   data={trending.products}
  //                   keyExtractor={(item,index) => 'key' + index}
  //                   renderItem={({item,index}) => renderItem(item,index)}
  //                   >
  //       </FlatList>
  //      </View>
  //      </View>
  //   )
  // }

  
  function renderBestSeller(bestseller){

    const renderItem = ({item,index}) => {
      return(
        <View style={{marginVertical:10}}>
          <TouchableOpacity style={{flex:1, flexDirection:'row'}}
          onPress={()=> navigation.navigate('Product')} >

        <Image 
        source={item.img}
            resizeMode="cover"
            style={{
              width:100,
              height:150,
              borderRadius:10
            }}
        >
        </Image>

        <View style={{flex:1, marginLeft:10, }}>
          <View>
            <Text style={{fontWeight:'bold', fontSize:17}}>{item.name}</Text>
            <Text style={{fontWeight:'bold', color:'gray',marginTop:5}}>{item.author}</Text>
            <Text style={{fontWeight:'bold', color:'gray',marginTop:5}}>{item.type}</Text>
            <View style={{flexDirection:'row',marginTop:5}}>
            <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
            <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
            <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
            <Ionicons name="star" size={15} color="#ebb859"></Ionicons>
            </View>
            <Text style={{fontWeight:'bold', color:'gray',marginTop:5}}>{item.price}</Text>

          </View>
        </View>

      </TouchableOpacity>  
        </View>
      )
    }

    return(
      <View>
      <Text style={{ marginHorizontal: 10, fontWeight: 'bold', fontSize: 16, color:'#ebb859' }}>BÁN CHẠY NHẤT</Text>
      <View style={{height:350, marginTop: 5}}>
        <FlatList 
                    showsVerticalScrollIndicator={false}
                    data={bestseller}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    >
        </FlatList>
       </View>
      </View>
    )

  }


  return (
    
    <View style={styles.container}>
      <View style={{flexDirection:"row", marginTop:-26}}>
      <TouchableOpacity style={{marginTop:40, paddingLeft:10}} onPress={()=>navigation.openDrawer()}><Ionicons 
      name="menu-outline" size={25} color="black"></Ionicons>
      </TouchableOpacity>
      <Image source={images.logo} style={{
        width:200,
        height:70,
        marginTop:20,
        marginLeft:74
      }}/>
      </View>

      <View style={styles.search}>
      <View style={{marginTop:7, marginLeft:3}}><Ionicons name="search" size={20} color="#ebb859"></Ionicons></View>
      <TextInput placeholder="Search" style={{marginLeft:10, marginVertical:10}}></TextInput>
      </View>
      
      {/* <View>
         {renderTrendingShoes(trending)}
       </View> */}
       {/* <View>
         {renderTrending()}
       </View> */}
       
      
       <View style={{marginLeft:12}}>
         {renderBestSeller(bestseller)}
       </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
    
    container: {
        flex:1,
        backgroundColor: '#FFF',
        
    },
    search:{
      flexDirection:'row',
      width:385,
      height:40,
      borderColor: '#dbdbdb',
      borderWidth:1,
      marginHorizontal:10,
      marginTop:10,
      borderRadius:5

    },
    trendingshadow: {
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 10,
      shadowOffset: {width:0,height:0}
    },
});

export default Home;

     