import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import Draggable from 'react-draggable';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Badge from '@mui/material/Badge';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import GroupsIcon from '@mui/icons-material/Groups';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListSubheader from '@mui/material/ListSubheader';
import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const App = () => {
  const sprintNameEl = document.querySelector('h1.pazoq0-3.dloTtE');
  const epicsEl = document.querySelectorAll('div.sc-1mvpb7m-11.haWZci');
  const teamEl = document.querySelectorAll('span span.css-ob4lje[aria-label]');

  const isJiraSite = sprintNameEl && epicsEl && teamEl;
  if (!isJiraSite) return <></>;

  const [teamMap, setTeamMap] = useState(new Map());
  const [selected, setSelected] = useState<number>(0);
  const [teamSize, setTeamSize] = useState<number>(0);
  const [selectedMembers, setSelectedMembers] = useState([]);
  epicsEl.forEach((epic) => console.log(epic.textContent));

  useEffect(() => {
    teamEl.forEach(function (member) {
      const memberName = member.ariaLabel;
      const memberImageUrl = member['style'].backgroundImage.match(/url\(["']?([^"']*)["']?\)/)[1];
      const isItemSelected = false;
      setTeamMap(new Map(teamMap.set(memberName, { memberName, memberImageUrl, isItemSelected })));
      setTeamSize(teamMap.size);
    });
  }, []);

  const handleItemClick = (name) => (event) => {
    const { memberImageUrl, isItemSelected } = teamMap.get(name);
    setTeamMap(new Map(teamMap.set(name, { memberName: name, memberImageUrl, isItemSelected: !isItemSelected })));
    isItemSelected ? setSelected(selected - 1) : setSelected(selected + 1);
    setSelectedMembers(Array.from(teamMap.values()).filter((member) => member.isItemSelected));
  };

  const handleShuffleButtonClick = (event) => {
    setSelectedMembers([
      ...selectedMembers.sort(() => {
        return 0.5 - Math.random();
      }),
    ]);
  };

  return (
    <Draggable>
      <div
        style={{
          position: 'absolute',
          top: '30vh',
          right: '10vw',
          backgroundColor: 'white',
          width: '22vw',
          height: '50vh',
          zIndex: '999',
        }}
      >
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              {sprintNameEl.textContent}
            </Typography>
          </Toolbar>
        </AppBar>

        <Box sx={{ overflow: 'hidden' }}>
          <Stack direction="row" spacing={0.5} sx={{ overflow: 'auto', p: 1 }}>
            {Array.from(teamMap.keys()).map((memberName) => (
              <Item onClick={handleItemClick(memberName)} sx={{ backgroundColor: teamMap.get(memberName).isItemSelected ? '#6B8E23' : '#fff' }}>
                <Avatar alt={memberName} src={teamMap.get(memberName).memberImageUrl} />
              </Item>
            ))}
          </Stack>
          <Divider light />
        </Box>
        {selected > 0 && (
          <Box sx={{ my: 1 }}>
            <Badge badgeContent={selected} color="secondary" sx={{ ml: 1, mt: 1 }}>
              <PlaylistAddCheckIcon color="action" />
            </Badge>
            <Badge badgeContent={teamSize} color="success" sx={{ ml: 2, mt: 1 }}>
              <GroupsIcon color="action" />
            </Badge>
            <IconButton color="primary" aria-label="shuffle" component="label" onClick={handleShuffleButtonClick}>
              <ShuffleIcon color="action" sx={{ ml: 1 }} />
            </IconButton>
          </Box>
        )}

        <Divider light />

        {selected > 0 && (
          <List
            dense
            sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper' }}
            subheader={<ListSubheader>Random Selection</ListSubheader>}
          >
            {selectedMembers.map((member) => {
              return (
                <ListItem secondaryAction={<Checkbox edge="end" />} disablePadding>
                  <ListItemButton>
                    <ListItemAvatar>
                      <Avatar src={member.memberImageUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={member.memberName} />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
        )}
      </div>
    </Draggable>
  );
};

const rootNode = document.createElement('div');
document.body.appendChild(rootNode);

const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));
