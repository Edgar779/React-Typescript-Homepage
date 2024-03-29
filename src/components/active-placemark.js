import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Placemark } from 'react-yandex-maps';

const makeLayout = (layoutFactory, component, contentKey) => {
    const Layout = layoutFactory.createClass('<div></div>', {
        build: function() {
            Layout.superclass.build.call(this);

            Layout.updateReactTree = () => ReactDOM.unstable_renderSubtreeIntoContainer(
                component,
                <div>{component.props[contentKey]}</div>,
                this.getElement().querySelector('div'),
            );

            Layout.updateReactTree();
        },
        clear: function() {
            Layout.updateReactTree = null;
            Layout.superclass.clear.call(this);
        },
    });

    return Layout;
};

class ActivePlacemark extends React.Component {
    static contextTypes = {
        ymaps: PropTypes.object.isRequired,
    };

    static propTypes = {
        balloonContent: PropTypes.node.isRequired,
    };

    constructor(props, context) {
        super(props);

        this.balloonLayout = makeLayout(
            props.ymaps.templateLayoutFactory, this, 'balloonContent');
    }

    componentDidUpdate(prevProps) {
        if (prevProps.balloonContent !== this.props.balloonContent) {
            if (this.balloonLayout.updateReactTree) {
                this.balloonLayout.updateReactTree();
            }
        }
    }

    render() {
        return (
            <Placemark
                {...this.props}
                options={{
                    balloonContentLayout: this.balloonLayout,
                    balloonPanelMaxMapArea: 0,
                    ...this.props.options,
                }}
            />
        );
    }
}

export default ActivePlacemark;
