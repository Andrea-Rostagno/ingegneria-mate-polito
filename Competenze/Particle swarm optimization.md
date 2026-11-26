---
tipo: competenza
area: ottimizzazione
corsi: [Ricerca operativa]
livello: [triennale]
aliases: ["PSO", "ottimizzazione a sciame di particelle", "sciame di particelle", "particle swarm"]
tags: [competenza, area/ottimizzazione]
---

# Particle swarm optimization

> Algoritmo di ricerca stocastica in cui uno sciame di particelle si muove nello spazio delle soluzioni combinando inerzia, attrazione verso il proprio miglior punto e verso il miglior punto dello sciame.

## Definizione / enunciato
Sciame di $m$ particelle $j\in[m]$ con posizione $\mathbf x_j(t)\in\mathbb R^n$ al tempo discreto $t=1,2,\dots$ e velocità $\mathbf v_j(t)$. Il moto dipende da tre fattori:
1. **inerzia**: la velocità tende a mantenersi;
2. **fattore cognitivo**: attrazione verso il proprio ottimo corrente $\mathbf p_j^*(t)$;
3. **fattore sociale**: attrazione verso l'ottimo corrente dello sciame $\mathbf g^*(t)$.

## Formule chiave
$$\mathbf v_j(t+1)=\mathbf v_j(t)+c_1r_{1j}(t)\big[\mathbf p_j^*(t)-\mathbf x_j(t)\big]+c_2r_{2j}(t)\big[\mathbf g^*(t)-\mathbf x_j(t)\big],$$
$$\mathbf x_j(t+1)=\mathbf x_j(t)+\mathbf v_j(t+1),$$
con coefficienti $c_1,c_2$ e variabili casuali $r_{1j}(t),r_{2j}(t)$ (per esempio uniformi).

## Intuizione
Ogni particella "ricorda" dove è andata meglio e "osserva" dove è andato meglio il gruppo: la casualità dei pesi mantiene l'esplorazione, l'attrazione verso i migliori produce convergenza.

## Come si usa
Come gli algoritmi genetici, è pensato per problemi non convessi nel continuo dove i metodi locali si bloccano in minimi locali; ne condivide i limiti (molte valutazioni di $f$, sensibilità al rumore), che motivano l'ottimizzazione surrogata.

## Nei corsi
- **Ricerca operativa** (triennale): Fonti: `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap5 (1).pdf` (p. 34-35); `triennale/ANNO 2/ricerca operativa/RO_Slide_Chap1.pdf` (p. 37).

## Prerequisiti
- [[Algoritmi genetici]]: stessa famiglia di metodi a popolazione

## Collegati
- [[Ottimizzazione surrogata]]: alternativa quando $f$ è costosa o rumorosa
- [[Distribuzione uniforme continua]]: una scelta possibile per $r_{1j},r_{2j}$
