import React from "react"
import { useTranslation } from "react-i18next"
import {
  DungeonPMDO,
  DungeonPMDOSynergies
} from "../../../../../types/enum/Dungeon"
import SynergyIcon from "../icons/synergy-icon"

export function WikiDungeon() {
  const { t } = useTranslation()
  return (
    <div id="wiki-dungeon">
      <ul>
        {(Object.keys(DungeonPMDO) as DungeonPMDO[])
          .sort((a, b) => t(`map.${a}`).localeCompare(t(`map.${b}`)))
          .map((dungeon) => {
            return (
              <li key={dungeon} className="nes-container">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h3>{t(`map.${dungeon}`)}</h3>
                  <div style={{ display: "flex", gap: "5px" }}>
                    {DungeonPMDOSynergies[dungeon].map((synergy) => (
                      <SynergyIcon type={synergy} />
                    ))}
                  </div>
                </div>
                <img
                  src={`/assets/tilesets/${dungeon}/tileset_0.png`}
                  alt={dungeon}
                />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
