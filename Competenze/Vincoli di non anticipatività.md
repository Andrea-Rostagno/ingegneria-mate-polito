---
tipo: competenza
area: ottimizzazione
corsi: [Ottimizzazione in condizione di incertezza]
livello: [magistrale]
aliases: ["non-anticipativity constraints", "nonanticipativity", "non anticipatività", "formulazione per scenari", "scenario-based formulation", "split-variable formulation", "misurabilità rispetto alla filtrazione"]
tags: [competenza, area/ottimizzazione]
---

# Vincoli di non anticipatività

> Nella formulazione per scenari ogni scenario ha la sua copia delle decisioni; questi vincoli impongono che scenari indistinguibili fino al tempo $t$ prendano la stessa decisione al tempo $t$, cioè che non si "anticipi" il futuro.

## Definizione / enunciato
Con variabili $\mathbf x_{s,t}$ per scenario e tempo il problema si decompone per scenari, ma ogni copia potrebbe sfruttare i rendimenti futuri del proprio scenario. Si impone allora $\mathbf x_{s,t}=\mathbf x_{s',t}$ per tutti gli scenari $s,s'$ che passano per lo stesso nodo al tempo $t$. In forma generale, nella programmazione multistadio, $\mathbf x_t(\cdot)$ deve essere $\mathcal F_t$-misurabile, cioè funzione solo della storia $\xi_{[t]}$.

## Formule chiave
Nell'esempio ALM con 8 scenari: al tempo 1 tutti gli $x_S^{s,1}$ uguali; al tempo 2 uguali dentro $\{1,2,3,4\}$ e dentro $\{5,6,7,8\}$; al tempo 3 uguali dentro $\{1,2\}$, $\{3,4\}$, $\{5,6\}$, $\{7,8\}$ (nella slide gli indici temporali appaiono tutti come 1, da verificare sul PDF). Nel progressive hedging la forma compatta è
$$\mathbf x_s=\sum_{s'=1}^S\pi_{s'}\mathbf x_{s'}\qquad\forall s\in[S]$$
(prime decisioni di stadio uguali alla loro media).

## Intuizione
Sono i vincoli che "legano" gli scenari: tolti, il problema si spezza in tanti problemi deterministici, uno per scenario, ciascuno con informazione perfetta (soluzione wait-and-see). Per questo sono il bersaglio naturale di un rilassamento lagrangiano.

## Come si usa
Si scelgono quando si vuole decomporre per scenari: il progressive hedging rilassa questi vincoli con un lagrangiano aumentato e risolve gli scenari in parallelo.

## Nei corsi
- **Ottimizzazione in condizione di incertezza** (magistrale): ALM in formulazione per scenari, misurabilità nei multistadio, progressive hedging. Fonti: `magistrale/Ottimizzazione in condizione di incertezza/lezione_1.pdf` (p. 17, 58-59); `magistrale/Ottimizzazione in condizione di incertezza/lezione_2.pdf` (p. 4).

## Prerequisiti
- [[Albero degli scenari]]: definisce quali scenari condividono un nodo
- [[Filtrazione]]: misurabilità rispetto all'informazione disponibile

## Porta a
- [[Progressive hedging]]: rilassamento dei vincoli di non anticipatività

## Collegati
- [[Valore dell'informazione perfetta]]: senza questi vincoli si ottiene la soluzione wait-and-see
- [[Rilassamento lagrangiano]]: vincoli complicanti da dualizzare
