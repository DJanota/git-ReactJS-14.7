// Contacts component -> displays the contact list
var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    // contact list is created with the received parameters; map function goes through the array 'this.props.items' and modifies them with the given function -> new element list gets created
    var contacts = this.props.items.map(function (contact) {
      return <Contact item={contact} key={contact.id}></Contact>
    });

    return (
      <ul className={'contactsList'}> {contacts}</ul>
    );
  }
});