'use babel';

import AgenjudislotonlinepragmaticgacorView from './Agen-judi-slot-online-pragmatic-gacor-view';
import { CompositeDisposable } from 'atom';

export default {

  AgenjudislotonlinepragmaticgacorView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.AgenjudislotonlinepragmaticgacorView = new AgenjudislotonlinepragmaticgacorView(state.AgenjudislotonlinepragmaticgacorViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.AgenjudislotonlinepragmaticgacorView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'Agen-judi-slot-online-pragmatic-gacor:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.AgenjudislotonlinepragmaticgacorView.destroy();
  },

  serialize() {
    return {
      AgenjudislotonlinepragmaticgacorViewState: this.AgenjudislotonlinepragmaticgacorView.serialize()
    };
  },

  toggle() {
    console.log('Agenjudislotonlinepragmaticgacor was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
