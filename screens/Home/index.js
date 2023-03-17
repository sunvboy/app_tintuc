import {ScrollView, View,Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import styles from './styles'
import {CategoryColum, CategoryGrid} from '../../components'
import { useDispatch,useSelector } from 'react-redux'
import {fetchCategory} from '../../store/slices/category'
const HomeScreen = ({navigation}) => {

  const dispatch = useDispatch()
  const categoryData = useSelector((state) => state.Category.category)
  const homeCategory = useSelector((state) => state.Setting.home)

  useEffect(() => {
    dispatch(fetchCategory({limit: 10,sort_by: 'id',sort_dir: 'desc'}))
  },[])
  const showCategoryHome = ({item}) =>{
      const categoryItem = categoryData?.find(category => category.id === item.id)
      return (
        item.status && categoryItem &&(
          item.type === 'grid'
          ? <CategoryGrid title={categoryItem.name}/>
          : <CategoryColum title={categoryItem.name}/>
        )
      )
  }

  return (
    <View style={styles.container}>
        <FlatList
        data={homeCategory}
        renderItem={showCategoryHome}
        keyExtractor={(item) => item.id.toString()}
        />
    </View>
  )
}

export default HomeScreen

