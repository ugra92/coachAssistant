import Ember from 'ember';

const attackPositions = [
  'SS',
  'CF',
  'LWF',
  'RWF'
];

const midfieldPositions = [
  'DMF',
  'CMF',
  'LMF',
  'RMF',
  'AMF'
];

const defensePositions = [
  'DMF',
  'CMF',
  'LMF',
  'RMF',
  'AMF'
];

export function playerPosition([position]/*, hash*/) {
  switch (true){
    case attackPositions.contains(position):{
      return "Attack";
    }
    case midfieldPositions.contains(position):{
      return "Midfield";
    }
    case defensePositions.contains(position):{
      return "Defense";
    }
  }
  return "N/A";
}

export default Ember.Helper.helper(playerPosition);
