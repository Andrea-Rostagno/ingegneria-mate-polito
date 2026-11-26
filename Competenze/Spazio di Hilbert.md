---
tipo: competenza
area: analisi
corsi: [Quantum physics, Analisi funzionale]
livello: [triennale]
aliases: ["Hilbert space", "spazio degli stati", "space of physical states", "spazio L2", "L^2", "funzioni a quadrato sommabile", "square integrable functions", "teorema di Fisher-Riesz", "Fisher-Riesz theorem", "relazione di completezza", "completeness relation", "sistema ortonormale completo", "prodotto scalare sesquilineare", "spazio pre-hilbertiano", "pre-Hilbert space", "spazio con prodotto scalare"]
tags: [competenza, area/analisi]
---

# Spazio di Hilbert

> Spazio vettoriale complesso a dimensione infinita i cui vettori hanno norma finita; in meccanica quantistica è lo spazio $L^2(V)$ delle funzioni d'onda, dove ogni stato si scrive come vettore di componenti in una base ortonormale completa.

## Definizione / enunciato
Uno spazio vettoriale su $\mathbb C$ con prodotto scalare **sesquilineare** ($(x,c_1y_1+c_2y_2)=c_1(x,y_1)+c_2(x,y_2)$, antilineare nel primo argomento) e dimensione infinita, i cui vettori $|v\rangle=\sum_kv_k|k\rangle$ hanno norma finita $\langle v|v\rangle=\sum_k|v_k|^2<\infty$, è uno **spazio di Hilbert**. La disuguaglianza di Cauchy-Schwarz garantisce che $\langle a|b\rangle$ sia finito.
Le funzioni d'onda formano $L^2(V)$ (funzioni a quadrato sommabile) con $(\psi,\phi)=\int_Vd^3x\,\psi^*\phi$: la somma di due stati è uno stato (principio di sovrapposizione) e la norma si conserva nel tempo.
Un sistema ortonormale $(\phi_n,\phi_i)=\delta_{ni}$ è **completo** (base) se ogni $\psi\in L^2(V)$ si scrive come serie di Fourier generalizzata.
**Teorema di Fisher-Riesz:** data una base ortonormale, $\sum_k|c_k|^2<\infty$ è condizione necessaria e sufficiente perché esista $\psi\in L^2(V)$ con $\psi=\sum_kc_k\phi_k$: corrispondenza biunivoca tra $L^2(V)$ e lo spazio dei vettori $|c\rangle$.

## Formule chiave
$$\psi(\vec x)=\sum_kc_k\phi_k(\vec x),\quad c_k=(\phi_k,\psi),\qquad (\psi,\psi)=\sum_k|c_k|^2\ \text{(Parseval)}$$
Per un sistema non completo vale solo $\sum_k|f_k|^2\le(f,f)$ (Bessel).
$$I=\sum_k|k\rangle\langle k|\quad\Longleftrightarrow\quad \delta^3(\vec y-\vec x)=\sum_k\phi_k^*(\vec y)\phi_k(\vec x)\ \ \text{(completezza)}$$

## Intuizione
Una funzione d'onda è un vettore con infinite componenti: la sommatoria diventa un integrale e l'"indice" diventa la posizione $\vec x$. Ogni base completa dà una diversa rappresentazione della delta di Dirac.

## Come si usa
Si sceglie la base adatta all'hamiltoniana (onde piane per la particella libera, autostati dell'oscillatore, armoniche sferiche): le componenti $c_k$ sono ampiezze di probabilità e Parseval esprime la normalizzazione. Esempio della dispensa: $f(x)=x\notin L^2(\mathbb R)$ ma $\in L^2(V)$ su $|x|\le L/2$, con serie $x=\frac L\pi\sum_{n\ge1}\frac{(-1)^{n+1}}{n}\sin(K_nx)$ (`2022_QP.pdf` p. 61).

## Nei corsi
- **Quantum physics** (triennale): cap. 5 della dispensa di V. Penna (spazi vettoriali, basi, Hilbert, L², Fisher-Riesz, completezza e delta); §2.1 delle note di M. Re Fiorentin (basi nello spazio di Hilbert). Fonti: `triennale/ANNO 2/quantum phisics/2022_QP.pdf` (pp. 53-58, 61); `triennale/ANNO 2/quantum phisics/QM_notes3.pdf` (pp. 17-19).
- **Analisi funzionale** (triennale): cap. 6. Attenzione alla convenzione: qui il prodotto scalare è **lineare nella prima variabile** e antilineare nella seconda, $\langle x,y\rangle=\overline{\langle y,x\rangle}$ (l'opposto della nota sopra). Uno spazio **pre-hilbertiano** è uno spazio vettoriale con prodotto scalare; $\|x\|=\sqrt{\langle x,x\rangle}$ è una norma (Cauchy-Schwarz) e uno **spazio di Hilbert** è un pre-hilbertiano completo (Def. 6.12). Esempi: $\mathbb F^n$, $\ell^2$ con $\langle x,y\rangle=\sum x_k\overline{y_k}$, $L^2(M,\mathcal M,\mu)$ con $\int f\overline g\,d\mu$; non esempi: $c_{00}$ e $C[a,b]$ con il prodotto scalare di $L^2$ (non completi). Il teorema di Fisher-Riesz della nota corrisponde qui al Cor. 6.48 ($H$ separabile infinito-dimensionale $\cong\ell^2$). Fonti: `triennale/ANNO 3/analisi funzionale/note_analisifunzionale.pdf` (§6.1, pp. 62-68; §6.3, p. 83); `triennale/ANNO 3/analisi funzionale/05_spazihilbert_handout.pdf` (pp. 2-8).

## Prerequisiti
- [[Spazio vettoriale euclideo]]: base ortonormale e prodotto scalare nel caso reale
- [[Disuguaglianza di Cauchy-Schwarz]]: rende finito il prodotto scalare
- [[Corrente di probabilità]]: la norma conservata rende L² lo spazio degli stati

## Porta a
- [[Base di onde piane]]: esempio di base completa con serie e integrale di Fourier
- [[Postulati della meccanica quantistica]]: gli stati sono vettori di L²
- [[Notazione di Dirac]]: ket e bra come vettori e duali
- [[Teorema della proiezione]]: migliore approssimazione su convessi chiusi (Analisi funzionale)
- [[Base ortonormale di uno spazio di Hilbert]]: esiste se e solo se H è separabile (Analisi funzionale)
- [[Teorema di rappresentazione di Riesz-Fréchet]]: H' si identifica con H (Analisi funzionale)
- [[Operatore aggiunto]]: definito grazie al prodotto scalare (Analisi funzionale)

## Collegati
- [[Identità di Parseval]]: stessa uguaglianza per le serie di Fourier trigonometriche
- [[Delta di Dirac]]: la relazione di completezza è una rappresentazione della delta
- [[Spazi Lp]]: L² è il caso p = 2
- [[Serie di Fourier]]: lo sviluppo su una base ortonormale è una serie di Fourier generalizzata
- [[Spazio di Banach]]: ogni spazio di Hilbert è un Banach con norma da prodotto scalare (Analisi funzionale)
- [[Identità del parallelogramma]]: caratterizza le norme hilbertiane (Analisi funzionale)
