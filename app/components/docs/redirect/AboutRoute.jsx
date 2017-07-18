import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ChatBot, { Loading } from 'react-simple-chatbot'
const $ = require('jquery')

export default class AboutRoute extends Component {
  constructor (props) {
    super(props)
    console.log(props)

    this.state = {
      loading: true,
      trigger: false,
      result: ''
    }

  this.handleLink = this.handleLink.bind(this)
  }

  closeChatBot({ opened }) {
  if (this.props.toggleFloating) {
    this.props.toggleFloating({ opened });
  } else {
    this.setState({ opened });
  }
}

  handleLink(event) {
    if (this.handleLink) {
      this.props.handleLink(event);
      resolve("Success!");
    } else {
      this.setState({ loading: true });
    }
    this.props.handleLink(link)
  }

  componentWillMount () {
    const self = this
    const { previousStep } = this.props
    const link = previousStep.value

    const targetElement = $(`.sub-links a[data-href="${link}"]`)

    let p1 = new Promise((resolve, reject) => {
      this.props.handleLink(link)
      targetElement.click()
      resolve("Success!")
      self.setState({loading:false})
    })

    p1.then((success)=>{
      this.props.triggerNextStep()
    })
    .catch((err)=>{
    })
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.closeChatBot({ opened: false })
    }, 8000);
  }

  render () {
    const { loading, result } = this.state

    return (
      <div >
        { loading ? <Loading /> : result }
      </div>
    )
  }
}

AboutRoute.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
  handleLink: PropTypes.func,
  closeChatBot: PropTypes.func,
}

AboutRoute.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
  handleLink: undefined,
  closeChatBot: undefined
}
