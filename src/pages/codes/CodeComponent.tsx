import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Chip, IconButton, Button } from "@material-ui/core";
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
        GetRepositories()
        .then(function (response) {
            setRepositories(response.data);
            console.log(repositories);
        })
        .catch(function (error) {
            console.log(error);
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
                    <TableCell align="left">{t('CODES.DESCRIPTION')}</TableCell>
                    <TableCell align="center">{t('CODES.LANGUAGE')}</TableCell>
                    <TableCell align="left">{t('CODES.CREATION_DATE')}</TableCell>
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
                            <TableCell align="left">{repo.description}</TableCell>
                            <TableCell align="center">
                                {repo.language && (
                                    <Chip label={repo.language} variant="outlined" />
                                )}
                            </TableCell>
                            <TableCell align="left">{repo.created_at}</TableCell>
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