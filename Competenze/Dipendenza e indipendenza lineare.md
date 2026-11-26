---
tipo: competenza
area: algebra-geometria
corsi: [Algebra lineare]
livello: [triennale]
aliases: ["linear independence", "linear dependence", "vettori linearmente indipendenti", "insieme libero", "l.i.", "l.d.", "vettori collineari"]
tags: [competenza, area/algebra-geometria]
---

# Dipendenza e indipendenza lineare

> Un insieme di vettori è libero (linearmente indipendente) se l'unica loro combinazione lineare che dà il vettore nullo è quella con tutti i coefficienti nulli.

## Definizione / enunciato
$v$ è **linearmente dipendente** (l.d.) da $v_1,\dots,v_k$ se è loro combinazione lineare, altrimenti è indipendente. L'insieme $\{v_1,\dots,v_k\}$ è **libero** (l.i.) se nessuno dei suoi vettori dipende dagli altri, cioè
$$\lambda^1v_1+\dots+\lambda^kv_k=0\iff\lambda^1=\dots=\lambda^k=0 .$$
Equivalentemente:
- il sistema omogeneo associato ha solo la soluzione banale;
- la mappa $(\lambda^1,\dots,\lambda^k)\mapsto\sum\lambda^iv_i$ da $K^k$ a $V$ è iniettiva.

## Formule chiave
- Un insieme che contiene $0$ non è libero.
- Un insieme che contiene un sottoinsieme l.d. non è libero.
- In $K^n$: $k$ vettori sono l.i. se e solo se la matrice che li ha come righe ha rango $k$. In particolare al massimo $n$ vettori di $K^n$ sono l.i.; per $k=n$ il criterio diventa $\det\neq0$.

## Intuizione
Indipendenza = nessuna ridondanza: ogni vettore porta una "direzione nuova". Due vettori sono dipendenti se sono collineari, tre se sono complanari. Il rango conta quante direzioni nuove ci sono davvero.

## Come si usa
- Vettori astratti (p. 24 di `7_Spazi_vettoriali.pdf`), con $u,v$ l.i.:
  - $\{2u,\ u-v\}$ è libero;
  - $\{2u,\ u-v,\ u+v\}$ non lo è, perché $2u=(u-v)+(u+v)$;
  - $\{2u,0\}$ non lo è, perché contiene il vettore nullo.
- In $K^n$: per $\{(1,0,-1,2),(1,1,2,1),(-1,1,0,1),(0,0,0,1)\}$ si scrivono i vettori come righe di $A$; l'insieme è libero se e solo se $\mathrm{rank}A=4$, cioè (matrice quadrata) $\det A\neq0$.
- Tre vettori di $\mathbb R^3$: liberi se e solo se il prodotto misto è non nullo.

## Nei corsi
- **Algebra lineare** (triennale): introdotta in $K^n$ e poi negli spazi astratti (slide di S. Mercadante). Fonti: `triennale/ANNO 1/algebra lineare/Appunti, riassunti e formulari/7_Spazi_vettoriali.pdf` (p. 22-26); `Appunti, riassunti e formulari/4_Calcolo_vettoriale_K^n.pdf` (p. 6-8); `Appunti, riassunti e formulari/SpaziSottospazi1_SpaziRn.pdf`.

## Prerequisiti
- [[Sottospazio generato]]: un vettore è dipendente se sta nello span degli altri

## Porta a
- [[Base e dimensione]]: una base è un insieme libero di generatori
- [[Rango di una matrice]]: righe linearmente indipendenti

## Collegati
- [[Prodotto misto]]: prodotto misto nullo se e solo se i tre vettori sono dipendenti
- [[Isomorfismo di spazi vettoriali]]: libero equivale a iniettività della mappa dei coefficienti
