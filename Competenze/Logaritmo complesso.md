---
tipo: competenza
area: analisi
corsi: [Metodi matematici e probabilità]
livello: [triennale]
aliases: ["complex logarithm", "log z", "Log z", "valore principale del logaritmo", "logaritmo principale", "funzione multivoca"]
tags: [competenza, area/analisi]
---

# Logaritmo complesso

> Il logaritmo di $z\neq0$ è multivoco: infiniti valori con la stessa parte reale e parti immaginarie che differiscono di $2k\pi$; il valore principale $\operatorname{Log}z$ si ottiene usando l'argomento principale.

## Definizione / enunciato
Per $z=re^{i\theta}\neq0$:
$$\log z=\operatorname{Log}r+i\theta,\qquad r=|z|,\ \theta=\arg z \quad (1.36)$$
dove $\operatorname{Log}r$ è il logaritmo naturale reale. Poiché $\arg z=\operatorname{Arg}z+2k\pi$, $\log z$ è una **multifunzione**. Il **valore principale** è
$$\operatorname{Log}z=\operatorname{Log}|z|+i\operatorname{Arg}z \quad (1.37)$$
definito su $\mathbb C\setminus\{0\}$, con immagine la striscia $-\pi<\operatorname{Im}w\le\pi$.

## Formule chiave
Proposizione 1.25:
$$e^{\log z}=z,\qquad \log e^z=z+2k\pi i,\ k\in\mathbb Z,$$
$$\log z_1z_2=\log z_1+\log z_2,\qquad \log\frac{z_1}{z_2}=\log z_1-\log z_2,$$
intese come uguaglianze fra insiemi di valori. Nella (1.38) la dispensa stampa $\log e^z=z+2k\pi$, ma la sua stessa dimostrazione dà $x+i(y+2k\pi)=z+2k\pi i$: manca la $i$ (refuso).

## Intuizione
L'esponenziale complesso è periodico di periodo $2\pi i$, quindi non è iniettivo: invertirlo dà infiniti valori, uno per ogni "giro" dell'argomento. Scegliere $\operatorname{Arg}$ equivale a tagliare il piano.

## Come si usa
Le regole (1.39) **non** valgono per $\operatorname{Log}$: con $z_1=z_2=-1=e^{i\pi}$ si ha $\operatorname{Log}z_1=\operatorname{Log}z_2=i\pi$ ma $\operatorname{Log}(z_1z_2)=\operatorname{Log}1=0\ne2\pi i$ (esempio del testo). Per risolvere $e^z=w$ si scrive $z=\operatorname{Log}|w|+i(\operatorname{Arg}w+2k\pi)$.

## Nei corsi
- **Metodi matematici e probabilità** (triennale): §1.3.6 "Funzione logaritmo" (la §1.3.5 "Multifunzioni? Radici?" nella dispensa è vuota). Fonte: `triennale/ANNO 2/metodi matematici & probabilità/Capitolo 1.pdf` (pp. 23-24).

## Prerequisiti
- [[Funzioni elementari complesse]]: inversa dell'esponenziale complesso
- [[Forma trigonometrica ed esponenziale dei numeri complessi]]: argomento e argomento principale

## Porta a
- Nessuno.

## Collegati
- [[Proprietà di potenze e logaritmi]]: le proprietà reali valgono solo come uguaglianze fra insiemi
- [[Radici n-esime dei numeri complessi]]: altra multifunzione nata dalla periodicità dell'argomento
