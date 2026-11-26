---
tipo: competenza
area: fisica
corsi: [Fisica 2]
livello: [triennale]
aliases: ["Fermi-Dirac distribution", "statistica di Fermi-Dirac", "livello di Fermi", "Fermi level", "potenziale chimico degli elettroni", "gas di elettroni"]
tags: [competenza, area/fisica]
---

# Distribuzione di Fermi-Dirac

> Probabilità che uno stato di energia $E$ sia occupato da fermioni non interagenti in equilibrio a temperatura $T$: $f(E,T)=1/(e^{(E-\mu)/kT}+1)$; il potenziale chimico $\mu$ degli elettroni è l'energia di Fermi $E_F$.

## Definizione / enunciato
A $T>0$ gli elettroni scambiano energia con il reticolo e cambiano stato di continuo, eppure le proprietà del solido restano costanti. Risposta di Fermi: esiste una distribuzione $n_i/g_i=f(E_i,T)$ realizzabile in un numero enormemente maggiore di modi di tutte le altre. Si contano i modi di mettere $n_i$ elettroni indistinguibili in $g_i$ stati, con vincoli di Pauli, $N$ costante e $U$ costante. Si pone $S=k_B\ln W$ e si minimizza l'energia libera $F=U-TS$ a $T$ e $N$ costanti, con l'approssimazione di Stirling.

## Formule chiave
$$n_i\le g_i,\quad \sum_in_i=N,\quad \sum_iE_in_i=U,\qquad W_i=\frac{g_i!}{n_i!(g_i-n_i)!},\quad W=\prod_iW_i,\quad S=k_B\ln W$$
$$F=\sum_iE_in_i-kT\ln\prod_i\frac{g_i!}{n_i!(g_i-n_i)!},\qquad \ln n!\approx n\ln n-n$$
$$\mu=\frac{\partial F}{\partial n_i}=E_i+kT\ln\left[\frac{n_i}{g_i-n_i}\right]\ \Rightarrow\ f(E,T)=\frac{1}{e^{(E-\mu)/kT}+1}$$
$$f(E,T=0)=1\ (E<\mu),\quad 0\ (E>\mu);\qquad n(E)dE=g(E)f(E,T)dE,\qquad N_e=\int_0^\infty g(E)f(E,T)dE$$
Energia di Fermi a $T=0$:
$$N_e=\int_0^{E_F}g(E)dE=\frac{L^3}{3\pi^2}\left[\frac{2m}{\hbar^2}\right]^{3/2}E_F^{3/2}\ \Rightarrow\ E_F=\left[\frac{3\pi^2N_e}{L^3}\right]^{2/3}\frac{\hbar^2}{2m}$$

## Intuizione
A $T=0$ è un gradino: tutti gli stati sotto $E_F$ sono pieni, quelli sopra vuoti. A $T>0$ il gradino si smussa su un intervallo di pochi $kT$ attorno a $E_F$, quindi solo gli elettroni vicini a $E_F$ possono cambiare stato. Per $E-\mu\gg kT$ si ritrova il fattore di Boltzmann.

## Come si usa
Si moltiplica per $g(E)$ e si integra per contare gli elettroni. Per un metallo con $s$ elettroni liberi per atomo e $N$ atomi la slide scrive $E_F=\left[\frac{3\pi^2sN}{L^3}\right]^{2/3}\frac{\hbar^2}{2m}$ (`69&70. LEZIONE.pdf` p. 20). Nei semiconduttori la neutralità tra elettroni in BC e lacune in BV fissa $E_F$ nel gap.

## Nei corsi
- **Fisica 2** (triennale): lezioni 67-68 ("La meccanica statistica applicata a sistemi quantistici", conteggio dei microstati con esempi n = 2, 3, 4) e 69-70 (energia di Fermi del conduttore). Fonti: `triennale/ANNO 2/fisica 2/lezioni/67&68. LEZIONE.pdf` (pp. 9-41); `triennale/ANNO 2/fisica 2/lezioni/69&70. LEZIONE.pdf` (pp. 2-10, 16).

## Prerequisiti
- [[Configurazione elettronica]]: esclusione di Pauli nel conteggio dei microstati
- [[Densità degli stati]]: N = ∫ g(E) f(E,T) dE
- [[Entropia]]: S = kB ln W, minimo dell'energia libera

## Porta a
- [[Conduzione elettrica nei metalli]]: conducono solo gli elettroni vicini a E_F
- [[Semiconduttore intrinseco]]: occupazione di banda di conduzione e di valenza
- [[Giunzione tra semiconduttori]]: N_i dipende da E_Fi

## Collegati
- [[Modello cinetico del gas ideale]]: per E - μ >> kT si ritrova il fattore di Boltzmann
