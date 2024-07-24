module.exports = {
  config: {
    name: "vyro",
    version: "1.0",
    author: "JARiF",
    countDown: 5,
    role: 0,
    longDescription: {
      vi: "",
      en: "get images from text.",
    },
    category: "araf",
    guide: {
      vi: "",
      en:
        "Type {pn} with your prompts | (number which model do you want)\nHere are the Supported models:\n1: IMAGINE_V4_Beta\n2: V4_CREATIVE\n3: IMAGINE_V3\n4: IMAGINE_V1\n5: PORTRAIT\n6: REALISTIC\n7: ANIME\n8: ANIME_V2\n9: COSMIC\n10: COMIC_V2\n11: MARBLE\n12: MINECRAFT\n13: DISNEY\n14: MACRO_PHOTOGRAPHY\n15: GTA\n16: STUDIO_GHIBLI\n17: DYSTOPIAN\n18: STAINED_GLASS\n19: PRODUCT_PHOTOGRAPHY\n20: PSYCHEDELIC\n21: SURREALISM\n22: GRAFFITI\n23: GHOTIC\n24: RAINBOW\n25: AVATAR\n26: PALETTE_KNIFE\n27: CANDYLAND\n28: CLAYMATION\n29: EUPHORIC\n30: ORIGAMI\n31: POP_ART\n32: RENAISSANCE\n33: FANTASY\n34: EXTRA_TERRESTRIAL\n35: WOOLITIZE\n36: NEO_FAUVISM\n37: AMAZONIAN\n38: SHAMROCK_FANTASY\n39: ABSTRACT_VIBRANT\n40: NEON\n41: CUBISM\n42: ROCOCO\n43: LOGO\n44: HAUNTED\n45: KAWAII_CHIBI\n46: FIREBENDER\n47: WATERBENDER\n48: FORESTPUNK\n49: ELVEN\n50: SAMURAI\n51: AQUASTIC\n52: VIBRAN_VIKING\n53: ABSTRACT_CITYSCAPE\n54: FIREBENDER\n55: ILLUSTRATION\n56: PAINTING\n57: ICON\n58: RENDER\n59: COLORING_BOOK\n60: PAPERCUT_STYLE\n61: KNOLLING_CASE\n62: ARCHITECTURE\n63: INTERIOR\n64: CYBERPUNK\n65: CREDIT_CHUR\n66: SAMURAI_V2\n67: LANDSCAPESTICKER\n68: GLASS_ART\n69: RETRO\n70: POSTER_ART\n71: INK\n72: JAPANESE_ART\n74: VAN_GOGH\n75: STEAMPUNK\n76: RETROWAVE\n77: POLY_ART\n78: VIBRANT\n79: MYSTICAL\n80: CINEMATIC_RENDER\n81: FUTURISTIC\n82: POLAROID\n84: PICASO\n85: SKETCH\n86: COMIC_BOOK\n87. REV_ANIMATED\n88. IMAGINE_V4\n89. REALISTIC_VISION\n90. EMMA_AI\n91. ABYSS_ORANGE_MIX\n92. LYRIEL\n93. RPG\n94. DREAM_SHAPER\n95. TOON_YOU\n96. UNREAL_ENGINE_5\n97. EPIC_REALISM\n98. MEINA_MIX\n99. XX_MIX_9_REALISTIC\n100. THREE_D_RENDERING\n101. ABSOLUTE_REALITY_V1_6\nSupported Ratio's:\n1. 1:1\n2. 9:16\n3. 16:9\nExample: {pn} cute girl | [model_number] | [ratio_number]",
    },
  },

  onStart: async function ({ api, args, message, event }) {
    try {
      const text = args.join(" ");
      if (!text) {
        return message.reply("Please provide a prompt.");
      }

      let prompt, model, ratio;
      if (text.includes("|")) {
        const [promptText, modelText, ratioText] = text
          .split("|")
          .map((str) => str.trim());
        prompt = promptText;
        model = modelText;
        ratio = ratioText;
      } else {
        prompt = text;
        model = "3";
        ratio = "1";
      }
      api.setMessageReaction("⏳", event.messageID, () => {}, true);
      const waitingMessage = await message.reply("✅ | Creating your Imagination...");

      const API = `https://midjourney.emma999999.repl.co/imagine?prompt=${encodeURIComponent(
        prompt
      )}&model=${model}&ratio=${ratio}`;
      const imageStream = await global.utils.getStreamFromURL(API);

      await message.reply({
        attachment: imageStream,
      });
      api.setMessageReaction("✅", event.messageID, () => {}, true);
      await api.unsendMessage(waitingMessage.messageID);
    } catch (error) {
      console.log(error);
      message.reply("Failed.").then(() => {
        message.delete(); 
      });
    }
  },
};