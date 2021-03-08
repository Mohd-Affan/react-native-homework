import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  ActivityIndicator,
  RefreshControl,
  Image,
} from 'react-native';

const ListFlat = () => {
  const [data, setData] = useState([]);
  const [isRefreshing, refreshList] = useState(false);
  const [loader, showLoader] = useState(false);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [page]);

  const fetchData = async () => {
    showLoader(true);
    try {
      const response = await fetch(`https://reqres.in/api/users/?page=${page}`);
      const jsonData = await response.json();
      setData([...data, ...jsonData.data]);
      showLoader(false);
    } catch (error) {
      alert('cant fetch data');
    }
  };

  dataStyling = ({item}) => {
    return (
      <View style={styles.dataContainer}>
        <Image style={styles.avatar} source={{uri: item.avatar}} />
        <View>
          <Text style={styles.id}>ID : {item.id}</Text>
          <Text style={styles.name}>
            {item.first_name} {item.last_name}
          </Text>
          <Text style={styles.email}>{item.email}</Text>
        </View>
      </View>
    );
  };

  const Loader = () => {
    return loader ? (
      <View>
        <ActivityIndicator animating={loader} size={'large'} color={'red'} />
      </View>
    ) : null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={dataStyling}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => {
              refreshList(true);
              setTimeout(() => {
                setData([]);
                setPage(1);
                refreshList(false);
              }, 5000);
            }}
          />
        }
        onEndReached={() => {
          if (page <= 1) {
            showLoader(true);
            setTimeout(() => {
              setPage((newpage) => newpage + 1);
              showLoader(false);
            }, 5000);
          }
        }}
        ListFooterComponent={<Loader />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  dataContainer: {
    flexDirection: 'column',
    borderWidth: 1,
    backgroundColor: 'yellow',
    margin: 10,
    padding: 10,
    alignItems: 'center',
    borderColor: 'black',
  },
  id: {
    fontSize: 20,
    textAlign: 'center',
  },
  avatar: {
    width: 100,
    borderWidth: 2,
    height: 100,
    margin: 20,
  },
  name: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
  },
  email: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
});

export default ListFlat;
