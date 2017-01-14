import React, { Component, PropTypes } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

const styles = StyleSheet.create({
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#b3b3b3'
  },
  text: {
    flex: 1,
    textAlign: 'center',
  },
  textContainer: {
    height: 20,
    marginLeft: 0,
    marginRight: 0,
  }
});

class Hr extends Component {
  constructor(props) {
    super(props);

    this.renderLine = this.renderLine.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderInner = this.renderInner.bind(this);
  }

  renderLine(key) {
    return <View key={key} style={[styles.line, { backgroundColor: this.props.lineColor }]} />
  }

  renderText(key) {
    return (
      <View key={key} style={styles.textContainer} >
        <Text style={[styles.text, { color: this.props.textColor }]}>{this.props.text}</Text>
      </View>
    )
  }

  renderInner() {
    if (!this.props.text) {
      return this.renderLine()
    }
    return [
      this.renderLine(1),
      this.renderText(2),
      this.renderLine(3)
    ]
  }

  render() {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', flex: this.props.flex }}>
        {this.renderInner() }
      </View>
    )
  }
}

Hr.propTypes = {
  lineColor: PropTypes.string.isRequired,
  text: PropTypes.string,
  textColor: PropTypes.string
};

export default Hr;