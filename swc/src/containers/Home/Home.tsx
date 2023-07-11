import React from 'react';
import styles from './Home.module.css';
import { Typography } from 'antd';

export class Home extends React.Component {
    render(): React.ReactNode {
        return <div className={styles.main}>
            <h1>Home</h1>
            <div className={styles.main}>
                <Typography.Paragraph>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                </Typography.Paragraph>

                <Typography.Paragraph>
                    Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team. Ant
                    Design, a design language for background applications, is refined by Ant UED Team.
                </Typography.Paragraph>

                <Typography.Text>
                    Ant Design, a design language for background applications, is refined by Ant UED Team.
                </Typography.Text>
            </div>
        </div>
    }
}
