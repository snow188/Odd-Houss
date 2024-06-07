module.exports = {
  config: {
    name: "Snøwgc",
    version: "1.0",
    author: "SiAM",
    countDown: 30,
    role: 0,
    shortDescription: {
      en: "Add user to support group"
    },
    longDescription: {
      en: "This command adds the user to the admin support group."
    },
    category: "support",
    guide: {
      en: "To use this command, simply type -support."
    }
  },

  onStart: async function ({ api, args, message, event }) {
    const supportGroupId = "10083522841719700"; // ID of the support group

    const threadID = event.threadID;
    const userID = event.senderID;

    // Check if the user is already in the support group
    try {
      const threadInfo = await api.getThreadInfo(supportGroupId);
      const participantIDs = threadInfo.participantIDs;
      if (participantIDs.includes(userID)) {
        // User is already in the support group
        api.sendMessage(
          "Tu as été ajouté avec succès🎉 dans le groupe de mon créateur ☃️ Odiamus Lonon ☃️.",
          threadID
        );
      } else {
        // Add user to the support group
        api.addUserToGroup(userID, supportGroupId, (err) => {
          if (err) {
            console.error("It's freezing 🥶 🦥:", err);
            api.sendMessage(
              " ☃️ We'll have to try again🧑‍🦯...",
              threadID
            );
          } else {
            api.sendMessage(
              "☃️❄️You have been added to the group check your spam or the message by invitation thank you 🌨 ",
              threadID
            );
          }
        });
      }
    } catch (e) {
      console.error("Failed to get thread info:", e);
      api.sendMessage(
        "Failed to retrieve the support group information. Please try again later.",
        threadID
      );
    }
  }
  }
