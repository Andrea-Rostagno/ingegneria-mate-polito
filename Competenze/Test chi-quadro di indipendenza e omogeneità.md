---
tipo: competenza
area: statistica
corsi: [Modelli statistici]
livello: [magistrale]
aliases: ["chi-square test of independence", "chi-square test of homogeneity", "test chi-quadro di indipendenza", "test di omogeneità", "test of homogeneity", "tabelle I x J", "frequenze attese E_ij", "G^2"]
tags: [competenza, area/statistica]
---

# Test chi-quadro di indipendenza e omogeneità

> In una tabella $I\times J$ si confrontano i conteggi con le frequenze attese "margine di riga per margine di colonna diviso $n$": la stessa statistica verifica l'omogeneità delle righe (righe campionate separatamente) o l'indipendenza delle due variabili (campione unico), con $(I-1)(J-1)$ gradi di libertà.

## Definizione / enunciato
- **Omogeneità** (libro, cap. 16, Teorema 16.13): nel campionamento multinomiale parallelo per riga, sotto $H_0:\pi_{j\mid1}=\dots=\pi_{j\mid I}$ per ogni $j$,
$$X^2=\sum_{i,j}\frac{(N_{ij}-E_{ij})^2}{E_{ij}},\quad E_{ij}=\frac{n_{i+}N_{+j}}n,\qquad X^2\to\chi^2((I-1)(J-1)).$$
- **Indipendenza** (Teorema 16.16): nel campionamento incrociato, sotto $H_0:\pi_{ij}=\pi_{i+}\pi_{+j}$, la stessa statistica con $E_{ij}=N_{i+}N_{+j}/n$ converge a $\chi^2((I-1)(J-1))$. Si rifiuta se $X^2>\chi^2_\alpha((I-1)(J-1))$.

## Formule chiave
Gradi di libertà dal teorema di Fisher: $IJ-1$ celle libere meno $(I-1)+(J-1)$ parametri stimati $=(I-1)(J-1)$. Versione col rapporto di verosimiglianza: $G^2=2\sum N_{ij}\log(N_{ij}/E_{ij})$, asintoticamente equivalente.

## Intuizione
Sotto entrambe le nulle la miglior stima della distribuzione di colonna è il margine $N_{+j}/n$; ciò che cambia è l'interpretazione: righe che si somigliano oppure assenza di associazione. Nella tabella $2\times2$ coincide con il test di OR $=1$ e con il test $z$ sulla differenza di proporzioni ($X^2=z^2$).

## Come si usa
Dati UCLA, stato socioeconomico × programma scolastico ($n=200$, tabella $3\times3$; libro, Es. `c16-ucla`): $X^2=16.604$, 4 g.d.l., p-value 0.0023; il modello log-lineare di indipendenza dà devianza $G^2=16.78$ (p 0.0021). In R `chisq.test(tabella)`, con la tabella inserita a mano. Con frequenze attese piccole si usa il test esatto di Fisher.

## Nei corsi
- **Modelli statistici** (magistrale): libro, cap. 16, §16.5-16.6 (Teoremi 16.13, 16.16, pp. 275-277). Fonti: `Libri/Modelli statistici/capitoli/cap16.tex`; `magistrale/Modelli statistici/251217 Due variabili categoriche.pdf`; `magistrale/Modelli statistici/251217 Capitolo Dati Categorici.pdf` §1.5.

## Prerequisiti
- [[Test chi-quadro di bontà dell'adattamento]]: statistica di Pearson e teorema di Fisher
- [[Schemi di campionamento delle tabelle di contingenza]]: quale ipotesi si verifica

## Porta a
- [[Modello log-lineare]]: l'indipendenza come modello di Poisson

## Collegati
- [[Test esatto di Fisher]]: alternativa esatta per tabelle piccole
- [[Odds ratio]]: misura dell'associazione nella $2\times2$
- [[Paradosso di Simpson]]: associazione che si inverte stratificando per una terza variabile
- [[Indipendenza di variabili aleatorie]]: definizione $\pi_{ij}=\pi_{i+}\pi_{+j}$
