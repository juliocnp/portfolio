import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Chip, IconButton, Button, Hidden  } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GetRepositories from "../../services/GitHubService";
import CodeIcon from '@material-ui/icons/Code';
import Loading from "../../shared/loading/Loading";
import CodeUI from "./CodeUI";

function CodeComponent() {
    const { t } = useTranslation();
    const classes = CodeUI();
    const [repositories, setRepositories] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        GetRepositories()
            .then(function (response) {
                response.data.map((repo: any) => repo['formattedDate'] = '{{date, intlDate}}');
                setRepositories(response.data);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    }, []);

    const handleCodeClick = (url: string, openCode: boolean = false) => {
        if (openCode) {
            url = url.replace('github', 'github1s');
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <div className={classes.tableContainer}>
            <Loading loading={loading} className={classes.tableContainer} />
            {!loading &&
                <TableContainer className={classes.tableContainer}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableCell align="left">{t('CODES.REPOSITORY')}</TableCell>
                            <Hidden smDown>
                                <TableCell align="left">{t('CODES.DESCRIPTION')}</TableCell>
                            </Hidden>
                            <Hidden smDown>
                                <TableCell align="center">{t('CODES.LANGUAGE')}</TableCell>
                            </Hidden>
                            <Hidden smDown>
                                <TableCell align="left" >{t('CODES.CREATION_DATE')}</TableCell>
                            </Hidden>
                            <TableCell align="center">{t('CODES.OPEN_CODE')}</TableCell>
                        </TableHead>
                        <TableBody>
                            {repositories && repositories.map((repo, key) => (
                                <TableRow key={key}>
                                    <TableCell align="left">
                                        <Button onClick={() => handleCodeClick(repo.html_url)} variant="outlined"
                                            style={{textTransform: 'none'}}>
                                            {repo.full_name}
                                        </Button>
                                    </TableCell>
                                    <Hidden smDown>
                                        <TableCell align="left">{repo.description}</TableCell>
                                    </Hidden>
                                    <Hidden smDown>
                                        <TableCell align="center">
                                            {repo.language && (
                                                <Chip label={repo.language} variant="outlined" />
                                            )}
                                        </TableCell>
                                    </Hidden>
                                    <Hidden smDown>
                                        <TableCell  align="left">{t('formattedDate', repo.formattedDate)}</TableCell>
                                    </Hidden>
                                    <TableCell align="center">
                                        <IconButton onClick={() => handleCodeClick(repo.html_url, true)}>
                                            <CodeIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            }
        </div>
    )
}
export default CodeComponent;