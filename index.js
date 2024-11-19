const { Client, GatewayIntentBits, PermissionFlagsBits, Events } = require('discord.js');
require('dotenv').config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, async () => {
    console.log(`${client.user.tag} is online!`);

    const guildId = process.env.GUILD_ID;

    if (!guildId) {
        console.error('サーバーIDが指定されていません');
        return;
    }

    try {
        const guild = await client.guilds.fetch(guildId); 
        const botMember = await guild.members.fetch(client.user.id); 
        const permissions = botMember.permissions; 

        console.log(`Server: ${guild.name} (${guild.id})`);
        console.log('Permissions:');
        Object.entries(PermissionFlagsBits).forEach(([key, value]) => {
            if (permissions.has(value)) {
                console.log(`- ${key}`);
            }
        });
    } catch (error) {
        console.error(`${guildId} の情報取得に失敗しました:`, error);
    }
});

client.login(process.env.TOKEN);
