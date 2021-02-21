<template>    
    <div class="card m-2" style="min-width:20rem;max-width:20rem;">
          <div class="card-header bg-info text-white">{{cardInfo.title}}</div>
          <div class="card-body">{{cardInfo.description}}</div>
    </div>
</template>
<script>
import cardTile from '../model/SubjectTopic';
export default {
  name: 'cardComponent',
  props:{
    cardInfo:cardTile
  }
}
  </script>