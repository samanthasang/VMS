const extractData = (trees) => {
  var jTrees = [];
  trees.map((tree) => {
    var jTree = {
      id: tree.id,
      title: tree.name,
      key: tree.id,
      icon: 1,
      groupID: tree.groupID,
      hasGroup: 0,
      hasDevice: 0,
      children: [],
    };
    if (tree.groups && tree.groups.length) {
      jTree.hasGroup = jTree.hasGroup + 1;
      jTree.children = jTree.children.concat(...extractData(tree.groups));
    }
    if (tree.devices && tree.devices.length) {
      jTree.hasDevice = jTree.hasDevice + 1;
      tree.devices.map((device) => {
        jTree.children.push({
          id: device.id,
          title: device.name,
          key: device.id,
          icon: 2,
          src2: device.mainStreamUrlWebRTC,
          src: device.subStreamUrlWebRTC,
          ipDomain: device.ipDomain,
          deviceType: device.deviceType,
          port: device.port,
          serialNumber: device.serialNumber,
          username: device.userName,
          password: device.password,
          deviceModel: device.deviceModel,
          status: device.status,
          groupID: device.groupID,
        });
      });
    }

    // jTree.children = jTree.children.concat(jTree);
    jTrees.push(jTree);
  });
  console.log(jTrees);
  return jTrees;
};

export default extractData;
