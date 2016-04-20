import Model from 'ember-data/model';
import DS    from 'ember-data';

export default Model.extend({
    name: DS.attr(),
    surname: DS.attr(),
    age: DS.attr(),
    position:DS.attr(),
    nationality: DS.attr(),
    image: DS.attr()
});
