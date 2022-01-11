class Falbarrel
{
    constructor()
    {
        this.mod = "warwolf41 FAL Barrel modified by Kropotkin";
        Logger.info(`Loading: ${this.mod}`);
        ModLoader.onLoad[this.mod] = this.load.bind(this);
    }
    load()
    {
        //base
        const itemId = "fal_short_16in";
        const itemClone = "5b7be1125acfc4001876c0e5";
        const database = DatabaseServer.tables;
        const items = database.templates.items;
        const handbook = database.templates.handbook.Items;
        const global = database.locales.global;
        const traders = database.traders;
        //handbook
        const itemCategory = "555ef6e44bdc2de9068b457e";
        const itemFleaPrice = 24000;

        //item
        const itemPrefabPath = "assets/content/items/mods/barrels/barrel_sa58_ds_arms_medium_contour_new406mm.bundle";
        const itemLongName = "SA-58 7.62x51 16.5 inch barrel";
        const itemShortName = 'SA58 16.5"';
        const itemDescription = "A 16.5 inch (419mm) barrel for DS Arms SA-58 7.62x51.";
        //offer
        const itemTrader = "5a7c2eca46aef81a7ca2145d"; //Peacekeeper
        const itemTraderPrice = 32000;
        const itemTraderCurrency = "5449016a4bdc2d6f028b456f"; //Dollars
        const itemTraderLV = 3;
        //pass info to functions below
        this.createItemHandbookEntry(itemId, itemCategory, itemFleaPrice, handbook);
        this.createItem(itemId, itemClone, itemPrefabPath, itemLongName, itemShortName, itemDescription, items, global);
        this.createItemOffer(itemId, itemTrader, itemTraderPrice, itemTraderCurrency, itemTraderLV, traders);
    }
    createItemHandbookEntry(i_id, i_category, i_fprice, i_handbook)
    {
        //add item to handbook
        i_handbook.push(
            {
                "Id": i_id,
                "ParentId": i_category,
                "Price": i_fprice
            }
        );
    }
    createItem(i_id, i_clone, i_path, i_lname, i_sname, i_desc, i_items, i_global)
    {
        let item = JsonUtil.clone(i_items[i_clone]);
        //change item properties
        item._id = i_id;
        item._props.Prefab.path = "assets/content/items/mods/barrels/barrel_sa58_ds_arms_medium_contour_new406mm.bundle";
        //add item back to database
        DatabaseServer.tables.templates.items[i_id] = item
        DatabaseServer.tables.templates.items["5b0bbe4e5acfc40dc528a72d"]._props.Slots[3]._props.filters[0].Filter.push ("fal_short_16in") ; // Add item to Default Inventory SLOTS
        //add custom item names to all languages/locales
        for (const localeID in i_global)
        {
            i_global[localeID].templates[i_id] =
            {
                "Name": i_lname,
                "ShortName": i_sname,
                "Description": i_desc
            };
        }
    }
    createItemOffer(i_id, i_trader, i_price, i_currency, i_loyalty, i_traders)
    {
        i_traders[i_trader].assort.items.push(
            {
                "_id": i_id,
                "_tpl": i_id,
                "parentId": "hideout",
                "slotId": "hideout",
                "upd":
                {
                    "UnlimitedCount": true,
                    "StackObjectsCount": 999999
                }
            }
        );
        //add trader cost to item
        i_traders[i_trader].assort.barter_scheme[i_id] = [
            [
                {
                    "count": i_price,
                    "_tpl": i_currency
                }
            ]
        ];
        //add trader loyalty level to item
        i_traders[i_trader].assort.loyal_level_items[i_id] = i_loyalty;
    }
}
module.exports.Mod = Falbarrel;
