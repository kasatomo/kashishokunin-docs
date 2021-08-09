import React from 'react';
import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography } from '@material-ui/core';
import theme from '../theme';

function HomePage() {
    return (
        <>
            <AppBar position='static'>
                <Toolbar>
                    <Typography variant='h6'>The菓子職人</Typography>
                </Toolbar>
            </AppBar>
            <Container maxWidth='lg'>
                <Paper
                    elevation={2}
                    style={{ margin: theme.spacing(2), padding: theme.spacing(2) }}
                >
                    <Typography variant='body1'>
                        The菓子職人（The歌詞職人）は2017年をもって開発を終了しました。
                    </Typography>
                    <Typography variant='body1'>
                        The菓子職人は2010年2月にnWhoisのプラグインとして開発され、2010年7月に現在のような独自ソフトウェア形式のアプリケーションとして公開されました。
                    </Typography>
                    <Grid container alignItems='center' justifyContent='center'>
                        <Grid item>
                            <img width='300' src='./old-syokunin.png' alt='昔の菓子職人' />
                            <Typography variant='subtitle1'>これが当時のソフトウェアUI</Typography>
                        </Grid>
                    </Grid>
                    <Typography variant='body1'>
                        その後、様々な改良を加え現在の歌詞職人に至ります。
                    </Typography>
                    <Typography variant='body1'>
                        新たな歌詞職人開発の計画がありましたが、現在その計画は進んでいません。
                    </Typography>
                </Paper>
            </Container>
        </>
    );
}

export default HomePage;
