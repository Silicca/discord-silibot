module.exports = {
	name: 'guildMemberUpdate',
	execute(discord, client, oldMember, newMember) {
        /**
        // If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
        const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
        if (removedRoles.size > 0) {
             console.log(`The roles ${removedRoles.map(r => r.name)} were removed from ${oldMember.displayName}.`);
        }
        // If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
        const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
        if (addedRoles.size > 0) {
            console.log(`The roles ${addedRoles.map(r => r.name)} were added to ${oldMember.displayName}.`);
        }*/

        const channel = client.channels.cache.get('748251454392762378');
        
        // If the role(s) are present on the old member object but no longer on the new one (i.e role(s) were removed)
        const removedRoles = oldMember.roles.cache.filter(role => !newMember.roles.cache.has(role.id));
        if (removedRoles.size > 0) console.log(`The roles ${removedRoles.map(r => r.name)} were removed from ${oldMember.displayName}.`);
        // If the role(s) are present on the new member object but are not on the old one (i.e role(s) were added)
        const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));
        if (addedRoles.size > 0) {
            if (addedRoles.some(role => role.name === 'Membres')) {
                const embed = new discord.MessageEmbed()
                    .setTitle(`♡﹕welcome ${oldMember.user.name}!`)
                    .setDescription("lalalala")
                    .setColor("#FFB6C1")
                    .setThumbnail("https://cdn.discordapp.com/attachments/806974794461216813/817737054745526304/giffy_2.gif");
                channel.send({content:`Welcome ${oldMember.user}`, embeds :[embed]});
            }
            console.log(`The roles ${addedRoles.map(r => r.name)} were added to ${oldMember.displayName}.`);
        } 
    }
};