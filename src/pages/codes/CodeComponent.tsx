import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Chip, IconButton, Button, Hidden  } from "@material-ui/core";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import GetRepositories from "../../services/GitHubService";
import CodeIcon from '@material-ui/icons/Code';
import './CodeComponent.scss';

function CodeComponent() {
    const { t } = useTranslation();
    const [repositories, setRepositories] = useState<any[]>([]);

    useEffect(() => {
        !repositories.length && GetRepositories()
        .then(function (response) {
            response.data.map((repo: any) => repo['formattedDate'] = '{{date, intlDate}}');
            setRepositories(response.data);
            console.log(repositories);
        })
        .catch(function (error) {
            console.log(error);
        });
    }, [repositories]);

    const handleCodeClick = (url: string, openCode: boolean = false) => {
        if (openCode) {
            url = url.replace('github', 'github1s');
        }
        window.open(url, '_blank', 'noopener,noreferrer');
    }

    return (
        <TableContainer className="table-container">
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableCell align="left">{t('CODES.REPOSITORY')}</TableCell>
                    <Hidden smDown>
                        <TableCell align="left">{t('CODES.DESCRIPTION')}</TableCell>
                    </Hidden>
                    <TableCell align="center">{t('CODES.LANGUAGE')}</TableCell>
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
                            <TableCell align="center">
                                {repo.language && (
                                    <Chip label={repo.language} variant="outlined" />
                                )}
                            </TableCell>
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
    )
}
export default CodeComponent;