---
tipo: competenza
area: fisica
corsi: [Fisica 2, Quantum physics]
livello: [triennale]
aliases: ["particle in a box", "buca di potenziale infinita", "infinite potential well", "buca a pareti infinite", "quantizzazione dell'energia in una buca"]
tags: [competenza, area/fisica]
---

# Particella in una scatola

> Una particella confinata tra due pareti di potenziale infinito ha autofunzioni sinusoidali ed energie quantizzate che crescono come $n^2$.

## Definizione / enunciato
Particella di massa $m$ libera ($V=0$) tra $x=0$ e $x=a$, con $V=\infty$ fuori. Si risolve l'equazione di Schrödinger stazionaria (equazione agli autovalori di $\hat H$) con $\Psi=0$ sulle pareti: la combinazione di onde progressiva e regressiva si riduce a un seno, e la condizione in $x=a$ quantizza $\alpha$ e quindi l'energia ("particella legata").

## Formule chiave
$$\alpha=\sqrt{\frac{2m}{\hbar^2}E},\qquad \Psi(x)=Ae^{i\alpha x}-Ae^{-i\alpha x}$$
$$\Psi_n(x)=2i\sqrt{\frac{1}{2a}}\,\sin\left(\frac{n\pi}{a}x\right)$$
$$E=\frac{\hbar^2\pi^2}{2ma^2}n^2,\quad n=1,2,3,\dots\qquad C=\frac{\hbar^2\pi^2}{2ma^2}:\ E_1=1C,\ E_2=4C,\ E_3=9C,\dots$$
Emissione o assorbimento tra due livelli (appunti a mano):
$$h\nu=E_2-E_1=\frac{hc}{\lambda}=(n_2^2-n_1^2)\frac{\pi^2}{L^2}\frac{\hbar^2}{2m}\ \Rightarrow\ \lambda=\frac{4mcL^2}{\pi\hbar(n_2^2-n_1^2)}$$

## Intuizione
Nella buca stanno solo onde stazionarie con un numero intero di mezze lunghezze d'onda: $\lambda$ discreta significa impulso, e quindi energia, discreti. L'energia minima non è zero ($n=1$), e i livelli si allontanano quando la buca si restringe ($\propto1/a^2$).

## Come si usa
Esempi svolti a mano nelle slide (`57&58. LEZIONE.pdf` pp. 18-19):
- un elettrone in una buca di $L=5$ Å, transizione $n=1\to2$: $\lambda=250$ nm;
- buca che emette $\lambda=500$ nm nella transizione $n=2\to1$: $L=0,67$ nm;
- protoni nel nucleo ($L=10^{-15}$ m): $E=2,95\cdot10^{-11}n^2$ J, $\Delta E=8,85\cdot10^{-11}$ J $=5,53\cdot10^8$ eV $\approx0,55$ GeV, $\lambda=2\cdot10^{-15}$ m.

Lo stesso modello dà l'energia traslazionale nel calore specifico di H₂.

## Nei corsi
- **Fisica 2** (triennale): lezioni 57-58, slide "La particella in una buca di potenziale (la particella legata)" più due pagine di esempi scritti a mano (scansioni). Fonti: `triennale/ANNO 2/fisica 2/lezioni/57&58. LEZIONE.pdf` (pp. 17-19).
- **Quantum physics** (triennale): §1.3 delle note di M. Re Fiorentin (buca infinita): livelli $E_n=\frac{\hbar^2k_n^2}{2m}=\frac{\pi^2\hbar^2}{2ma^2}n^2$, $n\ge1$, per una buca di larghezza $a$, ortogonalità e completezza delle autofunzioni (serie di Fourier), evoluzione di una sovrapposizione con le fasi $e^{-iE_nt/\hbar}$ e valore atteso dell'energia. Fonti: `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 9-16).

## Prerequisiti
- [[Equazione di Schrödinger]]: equazione stazionaria con V = 0 tra le pareti
- [[Misura in meccanica quantistica]]: autovalori dell'hamiltoniano

## Porta a
- [[Modello di Kronig-Penney]]: limite di buche indipendenti
- [[Densità degli stati]]: stati di un elettrone libero in un volume L³

## Collegati
- [[Stati stazionari]]: sviluppo di uno stato qualsiasi sugli autostati della buca (Quantum physics)
- [[Base di onde piane]]: la scatola con condizioni periodiche discretizza gli impulsi (Quantum physics)
