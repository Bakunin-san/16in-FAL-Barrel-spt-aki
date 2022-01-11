# 16in-FAL-Barrel-spt-aki

Original author warwolf41 modified by Kropotkin using base by Nootropix/A T L A S
All the code is taken from Nootropix/A T L A S so credit to them :)

INSTALLATION:

Drag folder "FAL New 16 inch Barrel" into directory mods located under users in the game directory.

USAGE:

Barrel is available on flea for around 22000 roubles or from Mechanic lvl 3 for about 32000 roubles. These numbers can be modified in the fallbarrel.js file in the src folder.

Modification:

You can modify props such as MOA or recoil impact by adding a line under the lines "item._props.Prefab.path = "assets/content/items/mods/barrels/barrel_sa58_ds_arms_medium_contour_new406mm.bundle";"
The syntax for props can be found by looking at the original barrel (item 5b7be1125acfc4001876c0e5) on the item ids checker and the selecting one of the props there.
For example the code to change the recoil impact would be:
item._props.Recoil = -10;
Which changes the recoil decrease from 6 percent to 10 percent.
