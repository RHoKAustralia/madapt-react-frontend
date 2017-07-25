import React, { Component } from 'react';
import Tabs from 'react-responsive-tabs';
import Iframe from 'react-iframe'
import 'react-responsive-tabs/styles.css'
import data from '../../../Content/newborn.json';

class PregnancyNewbornOneYear extends Component {
  constructor(props) {
    super(props)
    this.getTabs = this.getTabs.bind(this)
  }
  componentDidMount() {
    window.analytics.page();
  }
  getTabLinks(links) {
    links.map(link => {
      return <a href={link.url}>{link.text}</a>
    })
  }
  getTabs() {
    return data.tab.map(item => ({
      tabClassName: 'tab', // Optional
      panelClassName: 'panel', // Optional
      title: item.title,
      getContent: () => {
        return (
          <div>
            <div className='tabContent' dangerouslySetInnerHTML={{__html: item.text}} />
            {item.video && <Iframe     
                            url={item.video}
                            width="560px"
                            height="315px"
                            position="relative"
                            allowFullScreen />}
            <div className='tabLinks'>
              {item.links && item.links.map(link => {
                return <div><a href={link.url}>{link.title}</a><br/></div>
              })}
            </div>
          </div>
        )
      },
    }));
  }
  render() {
    return (
      <div className="wrapper">
        {data.summary}
        {data.topLevelVideo && <Iframe     
                            url={data.topLevelVideo}
                            width="560px"
                            height="315px"
                            position="relative"
                            allowFullScreen />}
        <Tabs items={this.getTabs()} />
      </div>
    )
  }
}

export default PregnancyNewbornOneYear