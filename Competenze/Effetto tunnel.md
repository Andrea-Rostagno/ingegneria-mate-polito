---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["tunnel effect", "quantum tunneling", "barriera di potenziale", "potential barrier", "coefficiente di trasmissione", "fusione nucleare nel Sole", "decadimento alfa"]
tags: [competenza, area/fisica]
---

# Effetto tunnel

> Una particella con energia $E$ minore dell'altezza $V_0$ di una barriera ha probabilità non nulla di attraversarla: un fenomeno senza analogo classico che spiega la fusione nel Sole e il decadimento alfa.

## Definizione / enunciato
Barriera rettangolare: $V(x)=0$ per $x<0$ e $x>l$, $V(x)=V_0$ per $0<x<l$. In (I) c'è un'onda incidente più una riflessa, in (III) solo l'onda trasmessa, in (II) una combinazione di esponenziali reali se $E<V_0$. Si impongono continuità di $\Psi$ e $d\Psi/dx$ in $x=0$ e $x=l$ più la normalizzazione, e si ricavano $A,B,C,F,G$. $|C/A|^2$ è la probabilità di trasmissione, $|B/A|^2$ quella di riflessione.

## Formule chiave
$$k=\sqrt{\frac{2m}{\hbar^2}E},\qquad \gamma=\sqrt{\frac{2m}{\hbar^2}(V_0-E)}$$
$$\Psi_I=Ae^{ikx}+Be^{-ikx},\quad \Psi_{II}=Ge^{\gamma x}+Fe^{-\gamma x},\quad \Psi_{III}=Ce^{ikx}$$
$$\frac{C}{A}=\frac{4ik\gamma\,e^{(\gamma-ik)l}}{(\gamma+ik)^2-(\gamma-ik)^2e^{2\gamma l}},\qquad \frac{B}{A}=\frac{(\gamma^2+k^2)(1-e^{2\gamma l})}{(\gamma+ik)^2e^{2\gamma l}-(\gamma-ik)^2}$$

## Intuizione
Dentro la barriera la funzione d'onda non si annulla ma decade come $e^{-\gamma x}$; se la barriera è sottile, all'uscita resta un'ampiezza finita che riparte come onda progressiva. Barriere più alte o più larghe riducono la trasmissione in modo esponenziale.

## Come si usa
**Fusione nel Sole** (`62. LEZIONE.pdf` pp. 14-18): due protoni devono superare la barriera coulombiana $V(r)=e^2/4\pi\varepsilon_0r$ ($\approx14$ MeV a $10^{-15}$ m) avendo solo $\approx1,9$ keV di energia cinetica nel nucleo solare (15 milioni di K, $\rho_H=150$ g/cm³, $N_H=10^{26}$ H/cm³).
- La teoria cinetica dà $f=6\cdot10^{18}$ urti/s.
- Una barriera di 14 MeV e larghezza $10^{-13}$ m dà $T=10^{-36}$, quindi prob $=T\cdot f$: ogni protone attende $\approx10^9$ anni $=5\cdot10^{16}$ s.
- Ma con tanti protoni si hanno $N_R=10^9$ fusioni/(s cm³).
- Catena: $^1$H+$^1$H→$^2$H+e⁺+ν (2 MeV), $^2$H+$^1$H→$^3$He (7,5 MeV), $^3$He+$^1$H→$^4$He (17,2 MeV); 26,73 MeV in totale; potenza stimata $2\cdot10^{26}$-$10^{27}$ J/s contro $3,86\cdot10^{26}$ J/s misurata.

**Uranio** (pp. 21-28): $^{238}_{92}$U → $^{234}_{90}$Th + $^4_2$He, con $\Delta m(U^{238})c^2=1804$ MeV e barriera coulombiana di 21 MeV, che l'alfa attraversa per effetto tunnel; segue un cenno alla fissione.

## Nei corsi
- **Fisica 2** (triennale): lezione 62, barriera rettangolare, modello della fusione nucleare e del nucleo (fissione). Fonti: `triennale/ANNO 2/fisica 2/lezioni/62. LEZIONE.pdf` (pp. 8-28); pp. 19-20 e 25 sono solo figure.
- **Quantum physics** (triennale): §1.2 delle note di M. Re Fiorentin, barriera di potenziale e coefficiente di trasmissione $T=|C/A|^2$ (rapporto tra le densità di probabilità dell'onda trasmessa e di quella incidente); grafico per un elettrone su una barriera di 5 eV a diverse larghezze: $T\ne0$ anche per $E<V_0$, e per $E>V_0$ $T$ oscilla invece di valere 1 (caso classico: gradino $T=0\to1$). Fonti: `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 6-9).

## Prerequisiti
- [[Gradino di potenziale]]: stesso raccordo su tre regioni

## Porta a
- [[Modello di Kronig-Penney]]: stesso raccordo per buche e barriere

## Collegati
- [[Corrente di probabilità]]: la probabilità che attraversa la barriera si conserva come flusso (Quantum physics)
