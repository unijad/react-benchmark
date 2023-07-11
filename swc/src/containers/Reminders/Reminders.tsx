import React from 'react';
import styles from './Reminders.module.css';
import { Typography } from 'antd';

export class Reminders extends React.Component {
    render(): React.ReactNode {
        return <div className={styles.main}>
            <h1>Reminders</h1>
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
