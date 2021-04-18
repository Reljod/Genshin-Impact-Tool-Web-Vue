<template>
  <div id="app">
    <CharacterList msg="Welcome to Genshin Impact Tool Web App" 
      :characterList=characterList @add-character="addCharacter"></CharacterList>
  </div>
</template>

<script>
import CharacterList from './components/CharactersList.vue'
import axios from 'axios'

var characterList = []

export default {
  name: 'App',
  components: {
    CharacterList
  }, 
  data() {
    return {
      characterList: characterList
    }
  },
  created() {
    this.fetchCharacterList();
  },
  methods: {
    fetchCharacterList() {
      var url = 'http://localhost:5000/characters';
      
      axios.get(url).then(response => {
        var characterList = response.data.Characters;
        this.characterList = characterList;
      });
    },
    addCharacter(newCharacter) {
      var url = 'http://localhost:5000/characters/add';
      var character = {
        "Name": newCharacter[0].Name,
        "Vision": newCharacter[0].Vision,
        "Affiliation": newCharacter[0].Affiliation,
        "Gender": newCharacter[0].Gender,
        "WeaponType": newCharacter[0].WeaponType,
      }
      var strObj = JSON.stringify(character);

      let headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }

      fetch(url, {
        method: "POST",
        mode: 'cors',
        body: strObj,
        headers: headers
      })
      .then(response => response.text()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
    }
  }
}
</script>

<style>
</style>
