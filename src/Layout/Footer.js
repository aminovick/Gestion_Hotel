import React  from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
export default props =>
<Paper >
      <Tabs
        value={0}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="  Hotels de la plage Copyright 2019" />
       
      </Tabs>
    </Paper>