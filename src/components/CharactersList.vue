<template>
<div class="flex items-center justify-center">
    <div class="container">
        <h1 class="text-xl font-bold">{{ msg }}</h1>
        <table class="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
            <thead class="text-black bg-green-400" >
                <tr class="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="p-3 text-left">#</th>
                    <th class="p-3 text-left">Name</th>
                    <th class="p-3 text-left">Vision</th>
                    <th class="p-3 text-left">Affiliation</th>
                    <th class="p-3 text-left">Gender</th>
                    <th class="p-3 text-left">Weapon Type</th>
                </tr>
            </thead>
            <tbody name="neo-list" class="flex-1 sm:flex-none">
                <tr v-for="(character, index) in characterList" :key="character.Id"
                class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                    <td class="border-grey-light border hover:bg-gray-100 p-3">{{ index + 1 }}</td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3">
                        <input v-model="character.Name" type="text"/>
                    </td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3"><input v-model="character.Vision" type="text" :readonly="!editable" /></td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3"><input v-model="character.Affiliation" type="text" :readonly="!editable" /></td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3"><input v-model="character.Gender" type="text" :readonly="!editable" /></td>
                    <td class="border-grey-light border hover:bg-gray-100 p-3"><input v-model="character.WeaponType" type="text" :readonly="!editable" /></td>
                    <!-- <td class="justify-evenly justify-items-stretch items-center">
                        <button v-if="editable" class="bg-green-600 hover:bg-green-800 text-white font-bold flex h-10 w-10 items-center justify-center rounded-full"
                        v-cloak>
                            +
                        </button>
                        <button v-if="!editable" class="bg-red-600 hover:bg-red-800 text-white font-bold flex h-10 w-10 items-center justify-center rounded-full"
                        v-cloak>
                            -
                        </button>
                    </td> -->
                </tr>
            </tbody>
        </table>
        <div class="flex flex-row justify-between"> 
            <div class="flex flex-row">
                <div id="addCharacterButton">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full
                    " @click="addEmptyRow">
                        Add character
                    </button>
                </div>
                <div id="cancelAddCharacterButton">
                    <button v-if="editable" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full
                    " @click="cancelAddEmptyRow">
                        Cancel
                    </button>
                </div>
            </div>
            <div id="cancelAddCharacterButton">
                <button v-if="editable" class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full
                " @click="submitChanges">
                    Submit
                </button>
            </div>
        </div>
    </div>
</div>
</template>

<script>

export default {
  name: 'CharacterList',
  props: ["msg", "characterList"],
  data: function(){
      return {
          editable: false,
          newEntry: {}
      }
  },
  methods: {
      addEmptyRow: function(){
          if (!this.editable) {
            this.newEntry = {
                    "Name": "",
                    "Vision": "",
                    "Affiliation": "",
                    "Gender": "",
                    "WeaponType": ""
                }
            this.characterList.push(this.newEntry);
            this.editable = true;
          }
      },
    cancelAddEmptyRow: function(){
        this.characterList.pop()
        this.editable = false;
    },
    submitChanges: function(){
        this.editable = false;
        var newEntry = this.characterList.slice(-1);
        this.$emit('add-character', newEntry);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    table {
        display: inline-table !important;
    }

    thead tr:not(:first-child) {
        display: none;
        }
    td:not(:last-child) {
        border-bottom: 0;
    }
    th:not(:last-child) {
        border-bottom: 2px solid rgba(0, 0, 0, .1);
    }
    [v-cloak] {
        display: none;
    }
</style>
