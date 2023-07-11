import React from 'react';
import styles from './Todo.module.css';
import { Typography } from 'antd';
import { Table } from '../../components/Table';

export class Todo extends React.Component {
    render(): React.ReactNode {
        return <div className={styles.main}>
            <h1>Todo</h1>
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
            <Table />
        </div>
    }
}
