import React from 'react';
import styles from './About.module.css';
import { Typography } from 'antd';

const { Paragraph, Text } = Typography;


export class About extends React.Component {
    render(): React.ReactNode {
        return <div className={styles.main}>
            <h1>About</h1>
            <Paragraph>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Paragraph>
                Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team. Ant
                Design, a design language for background applications, is refined by Ant UED Team.
            </Paragraph>

            <Text>
                Ant Design, a design language for background applications, is refined by Ant UED Team.
            </Text>
        </div>
    }
}
